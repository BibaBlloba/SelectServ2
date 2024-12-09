from typing import Annotated

from authx import AuthX, AuthXConfig
from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.ext.asyncio.session import AsyncSession

import auth
from database import *
from models import *

app = FastAPI()

config = AuthXConfig()
config.JWT_SECRET_KEY = settings.JWT_SECRET_KEY
config.JWT_ACCESS_COOKIE_NAME = settings.JWT_ACCESS_COOKIE_NAME
config.JWT_TOKEN_LOCATION = ["cookies"]

security = AuthX(config=config)


class UserLoginSchema(BaseModel):
    username: str
    password: str


@app.post("/login")
async def login(creds: UserLoginSchema):
    if creds.username == "test" and creds.password == "test1":
        token = security.create_access_token(uid="123")
        return {"access_token": token}
    else:
        raise HTTPException(status_code=401, detail="Incorrect username or password")


@app.get("/protected")
async def protected(): ...
