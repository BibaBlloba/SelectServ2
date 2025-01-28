from pydantic import BaseModel
from sqlalchemy import insert, select

from models import ForumMessages
from repos.base import BaseRepository
from schemas.messages import Messages


class MessagesRepository(BaseRepository):
    model = ForumMessages
    schema = Messages

    async def get_all(
        self,
        limit,
        offset,
    ):
        query = select(self.model)
        query = query.limit(limit).offset(offset)

        result = await self.session.execute(query)
        return [
            self.schema.model_validate(model, from_attributes=True)
            for model in result.scalars().all()
        ]

    async def add(self, data: BaseModel):
        stmt = insert(self.model).values(**data.model_dump())
        result = await self.session.execute(stmt)
        return result.scalars().one_or_none()
