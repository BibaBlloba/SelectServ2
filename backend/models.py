from fastapi_users.db import SQLAlchemyBaseUserTable, SQLAlchemyUserDatabase
from fastapi_users_db_sqlalchemy.access_token import (
    SQLAlchemyAccessTokenDatabase, SQLAlchemyBaseAccessTokenTable)
from sqlalchemy import ForeignKey, Integer, String
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
    phone_number: Mapped[str | None] = mapped_column()

    @classmethod
    def get_db(cls, session: "AsyncSession"):
        return SQLAlchemyUserDatabase(session, UserModel)


class RoleModel(Base):
    __tablename__ = "role"

    id: Mapped[str] = mapped_column(primary_key=True)

    @classmethod
    def get_db(cls, session: "AsyncSession"):
        return SQLAlchemyUserDatabase(session, UserModel)


class ForumMessages(Base):
    __tablename__ = "forumMessages"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column()
    user_email: Mapped[str] = mapped_column()

    message: Mapped[str] = mapped_column(String(10000))
