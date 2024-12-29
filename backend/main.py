from contextlib import asynccontextmanager
from typing import Annotated

from authx import AuthX, AuthXConfig
from fastapi import (APIRouter, Depends, FastAPI, HTTPException, Response,
                     status)
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.ext.asyncio.base import asyncstartablecontext
from sqlalchemy.ext.asyncio.session import AsyncSession, async_sessionmaker

import APIRouter_v1
import auth_router
import users_router
from actions.create_superuser import create_superuser
from database import *
from dependencies.fastapi_users import current_superuser, current_user
from logs import log
from models import *


@asyncstartablecontext
async def lifespan(app: FastAPI):
    yield


origins = [
    "http://localhost:5173",
    "https://ss.akeka.ru",
    "localhost:5173",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.on_event("startup")
# async def startup():
#     await create_superuser()


app.include_router(APIRouter_v1.router)


async def db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyUserDatabase(session, UserModel)


@app.post("/tables")
async def create_tables(user: UserModel = Depends(current_superuser)):
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
        log.warning("Drop Tables")
    return {"ok": True}
