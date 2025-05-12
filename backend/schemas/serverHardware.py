from pydantic import BaseModel


class ServerHardwareAddRequest(BaseModel):
    title: str
    value: int


class ServerHardwareAdd(BaseModel):
    title: str
    value: int
    type: str


class ServerHardware(BaseModel):
    id: int
    title: str
    value: int
    type: str


class RegionAdd(BaseModel):
    title: str


class Region(BaseModel):
    id: int
    title: str
