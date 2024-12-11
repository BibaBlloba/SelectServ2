from typing import Annotated

from authx import AuthX, AuthXConfig
from fastapi import (APIRouter, Depends, FastAPI, HTTPException, Response,
                     status)
from pydantic import BaseModel
from sqlalchemy.ext.asyncio.session import AsyncSession, async_sessionmaker

import auth_router
from database import *
from models import *

app = FastAPI()


app.include_router(auth_router.router)


async def create_async_session():
    async with async_session() as session:
        yield session


async def db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyUserDatabase(session, UserModel)


async def get_access_token_db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyAccessTokenDatabase(session, AccessToken)


@app.post("/tables")
async def create_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    return {"ok": True}
