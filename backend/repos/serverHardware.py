from sqlalchemy import select

from models.serverHardware import ServerHardwareOrm
from repos.base import BaseRepository
from schemas.serverHardware import ServerHardware


class ServerHardwareRepository(BaseRepository):
    model = ServerHardwareOrm
    schema = ServerHardware

    async def get_all(self, *args, **kwargs):
        query = select(self.model).order_by(self.model.value)
        result = await self.session.execute(query)
        return [
            self.schema.model_validate(model, from_attributes=True)
            for model in result.scalars().all()
        ]

    async def get_value(self, ids: list[int]):
        query = select(self.model.value).filter(self.model.id.in_(ids))
        result = await self.session.execute(query)
        calc = 0
        for i in result.scalars().all():
            calc = calc + i
        return calc
