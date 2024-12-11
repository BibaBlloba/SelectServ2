from fastapi import APIRouter, Depends
from fastapi.security import HTTPBearer

import auth_router
import users_router

http_bearer = HTTPBearer(auto_error=False)

router = APIRouter(dependencies=[Depends(http_bearer)])

router.include_router(auth_router.router)
router.include_router(users_router.router)
