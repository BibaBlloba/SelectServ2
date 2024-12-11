from fastapi import APIRouter

from dependencies.auth_back import authentication_backend
from dependencies.fastapi_users import fastapi_users
from schemas.user import UserCreate, UserRead

router = APIRouter(
    tags=["Auth"],
)

# /login
# /logot
router.include_router(
    router=fastapi_users.get_auth_router(authentication_backend),
    tags=["Auth"],
)

# register
router.include_router(
    router=fastapi_users.get_register_router(UserRead, UserCreate),
    tags=["Auth"],
)
