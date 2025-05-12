from models.serverHardware import ServerHardwareOrm
from repos.base import BaseRepository
from schemas.serverHardware import ServerHardware


class ServerHardwareRepository(BaseRepository):
    model = ServerHardwareOrm
    schema = ServerHardware
