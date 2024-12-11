from fastapi import Depends

from user_manager import UserManager

from .users import get_user_db


async def get_user_manager(users_db=Depends(get_user_db)):
    yield UserManager(users_db)
