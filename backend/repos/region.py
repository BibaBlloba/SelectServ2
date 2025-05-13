from models.serverHardware import RegionOrm
from repos.base import BaseRepository
from schemas.region import Region


class RegionRepository(BaseRepository):
    model = RegionOrm
    schema = Region
