from fastapi import APIRouter, HTTPException
from sqlalchemy.exc import DBAPIError

from dependencies.database import DbDep
from schemas.serverHardware import ServerHardwareAdd, ServerHardwareAddRequest

router = APIRouter(prefix="/hardware", tags=["Server Hardware"])


@router.get("/{type}")
async def get_hardware_by_type(db: DbDep, type: str):
    try:
        return await db.serverHardware.get_filtered(type=type)
    except DBAPIError:
        raise HTTPException(422, detail="Неправильный тип")


@router.post("/{type}")
async def add_hardware_by_type(db: DbDep, type: str, data: ServerHardwareAddRequest):
    add_data = ServerHardwareAdd(title=data.title, value=data.value, type=type)
    result = await db.serverHardware.add(add_data)
    await db.commit()
    return result


@router.get("")
async def get_all(db: DbDep):
    return await db.serverHardware.get_all()
