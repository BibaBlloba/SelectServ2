from fastapi import APIRouter, Depends

from dependencies.fastapi_users import current_superuser, current_user
from models import UserModel
from schemas.user import UserRead

router = APIRouter(prefix="/messages")


@router.get("/messages")
def get_user_messages(user: UserModel = Depends(current_user)):
    return {"User": UserRead.model_validate(user), "messages": ["mes1", "mes2", "mes3"]}


@router.get("/super_messages")
def get_superuser_messages(user: UserModel = Depends(current_superuser)):
    return {"User": UserRead.model_validate(user), "messages": ["mes1", "mes2", "mes3"]}
