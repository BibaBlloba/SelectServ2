from fastapi import APIRouter, Body, Depends, Query

from database import async_session
from dependencies.fastapi_users import current_superuser, current_user
from dependencies.messages import PaginationDap
from models import ForumMessages, UserModel
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
                    "message": 'Lorem Ipsum - это текст рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
                },
            }
        }
    ),
):
    async with async_session() as session:
        result = await MessagesRepository(session).add(message_data)
        await session.commit()
        return result


# FIX: Fix current user dependency. In this case averyone can delete anythink.
@router.delete("/delete/{message_id}")
async def delete_message(
    message_id: int,
    user: UserModel = Depends(current_user),
):
    async with async_session() as session:
        result = await MessagesRepository(session).delete(id=message_id)
        await session.commit()
        return result
