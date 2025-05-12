from fastapi import Depends
from fastapi_users_db_sqlalchemy.access_token import SQLAlchemyAccessTokenDatabase
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.asyncio.session import async_sessionmaker

from config import settings
from models.accessToken import AccessToken
from models.base import Base

async_engine = create_async_engine(settings.DATABASE_URL_asyncpg)

async_session = async_sessionmaker(
    async_engine, autoflush=False, expire_on_commit=False
)


async def create_async_session():
    async with async_session() as session:
        yield session


async def get_access_token_db(session: AsyncSession = Depends(create_async_session)):
    yield SQLAlchemyAccessTokenDatabase(session, AccessToken)


async def create_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
        print("Таблици сохдагы")
