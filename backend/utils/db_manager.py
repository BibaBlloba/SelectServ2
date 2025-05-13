from repos.messages import MessagesRepository
from repos.region import RegionRepository
from repos.serverHardware import ServerHardwareRepository
from repos.users import UsersRepository


class DbManager:
    def __init__(self, session_factory):
        self.session_factory = session_factory

    async def __aenter__(self):
        self.session = self.session_factory()

        self.messages = MessagesRepository(self.session)
        self.users = UsersRepository(self.session)
        self.serverHardware = ServerHardwareRepository(self.session)
        self.region = RegionRepository(self.session)

        return self

    async def __aexit__(self, *args):
        await self.session.rollback()
        await self.session.close()

    async def commit(self):
        await self.session.commit()

    async def rollback(self):
        await self.session.rollback()
