from typing import Annotated

from authx import AuthX, AuthXConfig
from fastapi import Depends, FastAPI, HTTPException, Response, status
from pydantic import BaseModel
from sqlalchemy.ext.asyncio.session import AsyncSession

# import auth
from database import *
from models import *

app = FastAPI()


@app.post("/tables")
async def create_tables():
    Base.metadata.create_all(async_engine)
