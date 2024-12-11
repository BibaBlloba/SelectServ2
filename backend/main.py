import logging
from typing import Annotated

from authx import AuthX, AuthXConfig
from fastapi import (APIRouter, Depends, FastAPI, HTTPException, Response,
                     status)
from pydantic import BaseModel
from sqlalchemy.ext.asyncio.session import AsyncSession, async_sessionmaker

import auth_router
import users_router
from database import *
from models import *

log = logging.getLogger(__name__)
log.setLevel(logging.DEBUG)
handler = logging.FileHandler(filename="logs.log")
formatter = logging.Formatter(
    "%(asctime)s : %(levelname)s : %(message)s ", datefmt="%Y/%m/%d %H:%M:%S"
)
handler.setLevel(logging.DEBUG)
handler.setFormatter(formatter)
log.addHandler(handler)
app = FastAPI()


app.include_router(auth_router.router)
app.include_router(users_router.router)


async def db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyUserDatabase(session, UserModel)


@app.post("/tables")
async def create_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
        log.warning("Drop Tables")
    return {"ok": True}
