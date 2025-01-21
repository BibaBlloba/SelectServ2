from fastapi_users import schemas
from pydantic import Field


class UserRead(schemas.BaseUser[int]):
    phone_number: str | None = Field(None)


class UserCreate(schemas.BaseUserCreate):
    phone_number: str | None = Field(None)


class UserUpdate(schemas.BaseUserUpdate):
    phone_number: str | None = Field(None)
