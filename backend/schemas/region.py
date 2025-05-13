from pydantic import BaseModel


class RegionAdd(BaseModel):
    title: str


class Region(BaseModel):
    id: int
    title: str
