from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, status
from sqlalchemy.ext.asyncio.session import AsyncSession

import auth
from database import *
from models import *

app = FastAPI()
app.include_router(auth.router)


async def db():
    async with async_session() as session:
        yield session


SessionDap = Annotated[AsyncSession, Depends(db)]
userDap = Annotated[dict, Depends(auth.get_current_user)]


@app.post("/tables")
async def tables():
    async with async_engine.begin() as conn:
        # await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    return {"ok": True}


@app.get("/", status_code=status.HTTP_200_OK)
async def testUser(user: userDap, db: SessionDap):
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Authentication Failed"
        )
    return {"User": user}
