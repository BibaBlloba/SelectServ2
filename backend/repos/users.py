from pydantic import BaseModel
from sqlalchemy import insert, select

from models import UserModel
from repos.base import BaseRepository


class UsersRepository(BaseRepository):
    model = UserModel

    async def get_all(
        self,
        limit,
        offset,
    ):
        query = select(self.model)
        query = query.limit(limit).offset(offset)

        result = await self.session.execute(query)
        return result.scalars().all()

    async def add(self, data: BaseModel):
        stmt = insert(self.model).values(**data.model_dump())
        result = await self.session.execute(stmt)
        return result.scalars().one_or_none()
