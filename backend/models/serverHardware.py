from enum import Enum

from sqlalchemy import Enum as SqlEnum
from sqlalchemy.orm import Mapped, mapped_column

from models.base import Base


class ServerHardvareType(str, Enum):
    PROC = "processor"
    MEMORY = "memory"
    DISK = "disk"


class ServerHardwareOrm(Base):
    __tablename__ = "ServerHardwareOrm"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(unique=True)
    value: Mapped[int] = mapped_column()
    type: Mapped[ServerHardvareType] = mapped_column(SqlEnum(ServerHardvareType))


class RegionOrm(Base):
    __tablename__ = "ServerHardvareRegion"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(unique=True)
