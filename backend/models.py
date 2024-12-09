from fastapi_users.db import SQLAlchemyBaseUserTable
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


class UserModel(Base, SQLAlchemyBaseUserTable[int]):
    __tablename__ = "users"
