from fastapi_users.db import SQLAlchemyBaseUserTable, SQLAlchemyUserDatabase
from fastapi_users_db_sqlalchemy.access_token import (
    SQLAlchemyAccessTokenDatabase, SQLAlchemyBaseAccessTokenTable)
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class AccessToken(Base, SQLAlchemyBaseAccessTokenTable[int]):
    user_id: Mapped[int] = mapped_column(
        Integer, ForeignKey("users.id", ondelete="cascade"), nullable=False
    )

    @classmethod
    def get_db(cls, session: "AsyncSession"):
        return SQLAlchemyAccessTokenDatabase(session, cls)


class UserModel(Base, SQLAlchemyBaseUserTable[int]):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)

    @classmethod
    def get_db(cls, session: "AsyncSession"):
        return SQLAlchemyUserDatabase(session, UserModel)


class RoleModel(Base):
    __tablename__ = "role"

    id: Mapped[str] = mapped_column(primary_key=True)

    @classmethod
    def get_db(cls, session: "AsyncSession"):
        return SQLAlchemyUserDatabase(session, UserModel)
