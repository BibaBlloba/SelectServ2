from contextlib import asynccontextmanager
from typing import Annotated

from authx import AuthX, AuthXConfig
from fastapi import (APIRouter, Depends, FastAPI, HTTPException, Response,
                     status)
from pydantic import BaseModel
from sqlalchemy.ext.asyncio.session import AsyncSession, async_sessionmaker

import APIRouter_v1
import auth_router
import users_router
from database import *
from logs import log
from models import *

app = FastAPI()


app.include_router(APIRouter_v1.router)


async def db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyUserDatabase(session, UserModel)


@app.post("/tables")
async def create_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
        log.warning("Drop Tables")
    return {"ok": True}
