from typing import Annotated

from fastapi import Depends

from database import async_session
from utils.db_manager import DbManager


async def get_db():
    async with DbManager(session_factory=async_session) as db:
        yield db


DbDep = Annotated[DbManager, Depends(get_db)]
