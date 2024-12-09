from typing import Annotated

from authx import AuthX, AuthXConfig
from fastapi import Depends, FastAPI, HTTPException, Response, status
from pydantic import BaseModel
from sqlalchemy.ext.asyncio.session import AsyncSession, async_sessionmaker

# import auth
from database import *
from models import *

app = FastAPI()

async def create_async_session():
    async with async_session_maker()

@app.post("/tables")
async def create_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    return {"ok": True}
