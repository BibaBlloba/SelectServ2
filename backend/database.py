from fastapi import Depends
from fastapi_users_db_sqlalchemy.access_token import \
    SQLAlchemyAccessTokenDatabase
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.asyncio.session import async_sessionmaker

from config import settings
from models import AccessToken

async_engine = create_async_engine(settings.DATABASE_URL_asyncpg)

async_session = async_sessionmaker(
    async_engine, autoflush=False, expire_on_commit=False
)


async def create_async_session():
    async with async_session() as session:
        yield session


async def get_access_token_db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyAccessTokenDatabase(session, AccessToken)
