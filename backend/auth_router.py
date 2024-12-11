from fastapi import APIRouter

from dependencies.auth_back import authentication_backend
from dependencies.fastapi_users import fastapi_users

router = APIRouter(
    tags=["Auth"],
)

router.include_router(
    router=fastapi_users.get_auth_router(authentication_backend),
    prefix="/jwt",
    tags=["Auth"],
)
