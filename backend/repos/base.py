from pydantic import BaseModel
from sqlalchemy import delete, insert, select, update

from models import Base


class BaseRepository:
    model = Base
    schema: BaseModel = None

    def __init__(self, session) -> None:
        self.session = session

    async def get_all(self, *args, **kwargs):
        query = select(self.model)
        result = await self.session.execute(query)
        return [
            self.schema.model_validate(model, from_attributes=True)
            for model in result.scalars().all()
        ]

    async def add(self, data: BaseModel):
        stmt = insert(self.model).values(**data.model_dump())
        result = await self.session.execute(stmt)
        return result.scalars().one_or_none()
