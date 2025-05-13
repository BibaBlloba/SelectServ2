from fastapi import APIRouter, HTTPException, Query
from sqlalchemy.exc import DBAPIError

from dependencies.database import DbDep
from schemas.region import RegionAdd
from schemas.serverHardware import ServerHardwareAdd, ServerHardwareAddRequest

router = APIRouter(prefix="/hardware", tags=["Server Hardware"])


# @router.get("/{type}")
# async def get_hardware_by_type(db: DbDep, type: str):
#     try:
#         return await db.serverHardware.get_filtered(type=type)
#     except DBAPIError:
#         raise HTTPException(422, detail="Неправильный тип")


@router.post("/add/{type}")
async def add_hardware_by_type(db: DbDep, type: str, data: ServerHardwareAddRequest):
    add_data = ServerHardwareAdd(title=data.title, value=data.value, type=type)
    result = await db.serverHardware.add(add_data)
    await db.commit()
    return result


@router.post("/region")
async def add_region(db: DbDep, data: RegionAdd):
    result = await db.region.add(data)
    await db.commit()
    return result


@router.get("")
async def get_all(db: DbDep):
    serverHardvare = await db.serverHardware.get_all()
    regions = await db.region.get_all()
    return {"hardware": serverHardvare, "regions": regions}


# @router.get("/{id}")
# async def get_by_id(db: DbDep, id: int):
#     return await db.serverHardware.get_filtered(id=id)


@router.get("/calculate")
async def get_calculate_value(db: DbDep, ids: str = Query(default=None)):
    id_list = [int(id) for id in ids.split(",")]
    return await db.serverHardware.get_value(id_list)
