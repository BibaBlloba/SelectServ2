from fastapi import APIRouter, Body

from database import async_session
from dependencies.messages import PaginationDap
from models import ForumMessages
from repos.messages import MessagesRepository
from schemas.messages import Messages, MessagesAdd

router = APIRouter(prefix="/forum", tags=["Forum"])


@router.get("/get_all")
async def get_all(
    pagination: PaginationDap,
):
    per_page = pagination.per_page or 20
    async with async_session() as session:
        return await MessagesRepository(session).get_all(
            limit=per_page, offset=per_page * (pagination.page - 1)
        )


@router.post("/create_message")
async def create_message(
    message_data: MessagesAdd = Body(
        openapi_examples={
            "1": {
                "summary": "Юзер пример 1",
                "value": {
                    "user_id": "1",
                    "user_email": "a@a.com",
                    "message": "Test message 123321 ejaslkdja qjwiodjaslkd.",
                },
            }
        }
    ),
):
    async with async_session() as session:
        result = await MessagesRepository(session).add(message_data)
        await session.commit()
        return result
