from datetime import date, time

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class MessagesAdd(BaseModel):
    user_id: int
    user_email: EmailStr
    message: str


class Messages(MessagesAdd):
    id: int
    created_at: date | None
    time: time | None

    model_config = ConfigDict(from_attributes=True)
