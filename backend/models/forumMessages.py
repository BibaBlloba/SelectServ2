from datetime import date, datetime
from zoneinfo import ZoneInfo

from sqlalchemy import ForeignKey, String, Time
from sqlalchemy.orm import Mapped, mapped_column

from models.base import Base


class ForumMessages(Base):
    __tablename__ = "forumMessages"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user_email: Mapped[str] = mapped_column()
    created_at: Mapped[date | None] = mapped_column(default=datetime.now())
    time: Mapped[int | None] = mapped_column(
        Time,
        default=datetime.now(tz=ZoneInfo("Europe/Moscow"))
        .time()
        .replace(microsecond=False),
    )

    message: Mapped[str] = mapped_column(String(10000))
