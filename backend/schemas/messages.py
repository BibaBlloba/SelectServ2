from datetime import date

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class MessagesAdd(BaseModel):
    user_id: int
    user_email: EmailStr
    message: str | None


class Messages(MessagesAdd):
    id: int
    created_at: date

    model_config = ConfigDict(from_attributes=True)
