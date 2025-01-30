from fastapi import APIRouter, Depends
from sqlalchemy import select

from dependencies.fastapi_users import fastapi_users
from models import UserModel
from repos.users import UsersRepository
from schemas.user import UserRead, UserUpdate
from dependencies.fastapi_users import current_superuser, current_user
from database import async_session
from dependencies.messages import PaginationDap

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)

# /me
# /{id}
router.include_router(
    router=fastapi_users.get_users_router(
        UserRead,
        UserUpdate,
    )
)


# /usersAdmin_userTable
@router.get("/")
async def get_all_users(
    pagination: PaginationDap,
    user: UserModel = Depends(current_superuser),
):
    per_page = pagination.per_page or 20
    async with async_session() as session:
        result = await UsersRepository(session).get_all(
            limit=per_page, offset=per_page * (pagination.page - 1)
        )
        return result
