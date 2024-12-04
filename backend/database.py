from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.asyncio.session import async_sessionmaker

from config import settings

async_engine = create_async_engine(settings.DATABASE_URL_asyncpg)

async_session = async_sessionmaker(
    async_engine, autoflush=False, expire_on_commit=False
)
