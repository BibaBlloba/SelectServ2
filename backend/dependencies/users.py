from fastapi import Depends
from fastapi_users.db import SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession

from main import create_async_session
from models import UserModel


async def get_user_db(session: AsyncSession = Depends(create_async_session)):
    yield UserModel.get_db(session=session)
