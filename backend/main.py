import sys
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Annotated

import uvicorn
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
from Forum_router import router as forum_router
from logs import log
from models import *

sys.path.append(str(Path(__file__).parent.parent))


async def create_tables_on_startup():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
        log.warning("Drop Tables")


@asyncstartablecontext
async def lifespan(app: FastAPI):
    yield


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    try:
        await create_superuser()
    except:
        pass


# @app.on_event("startup")
# async def startup():
#     await create_tables_on_startup()


app.include_router(APIRouter_v1.router)
app.include_router(forum_router)


async def db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyUserDatabase(session, UserModel)


@app.post("/tables")
async def create_tables():
    # async def create_tables(user: UserModel = Depends(current_superuser)):
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
        log.warning("Drop Tables")
    return {"ok": True}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
