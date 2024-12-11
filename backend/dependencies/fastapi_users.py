from fastapi_users import FastAPIUsers

from models import UserModel
from user_manager import UserManager

from .auth_back import authentication_backend
from .user_manager import get_user_manager

fastapi_users = FastAPIUsers[UserModel, int](
    get_user_manager,
    [authentication_backend],
)
