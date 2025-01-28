import asyncio
import contextlib

from config import settings
from database import async_session
from dependencies.user_manager import get_user_manager
from dependencies.users import get_user_db
from logs import log
from models import UserModel
from schemas.user import UserCreate
from user_manager import UserManager

get_users_db_context = contextlib.asynccontextmanager(get_user_db)
get_user_manager_context = contextlib.asynccontextmanager(get_user_manager)

default_email = settings.SUPERUSER_EMAIL
default_password = settings.SUPERUSER_PASSWORD
default_is_active = True
default_is_superuser = True
default_is_verified = True


async def create_user(
    user_manager: UserManager,
    user_create: UserCreate,
) -> UserModel:
    user = await user_manager.create(
        user_create=user_create,
        safe=False,
    )
    log.warning("SuperUser %r registered", user.id)
    return user


async def create_superuser(
    email: str = default_email,
    password: str = default_password,
    is_active: bool = default_is_active,
    is_superuser: bool = default_is_superuser,
    is_verified: bool = default_is_verified,
):
    user_create = UserCreate(
        email=email,
        password=password,
        is_active=is_active,
        is_superuser=is_superuser,
        is_verified=is_verified,
        phone_number=None,
    )
    async with async_session() as session:
        async with get_users_db_context(session) as users_db:
            async with get_user_manager_context(users_db) as user_manager:
                return await create_user(
                    user_manager=user_manager,
                    user_create=user_create,
                )


if __name__ == "__main__":
    asyncio.run(create_superuser())
