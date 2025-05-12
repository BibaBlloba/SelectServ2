from fastapi import Depends
from fastapi_users_db_sqlalchemy.access_token import SQLAlchemyAccessTokenDatabase
from sqlalchemy.ext.asyncio import AsyncSession

from main import create_async_session
from models.accessToken import AccessToken


async def get_access_token_db(
    session: AsyncSession = Depends(create_async_session),
):
    yield AccessToken.get_db(session=session)
