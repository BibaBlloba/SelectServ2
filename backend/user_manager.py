import logging
from typing import Optional

from fastapi import Request
from fastapi_users import BaseUserManager, IntegerIDMixin

from config import settings
from models import UserModel

log = logging.getLogger(__name__)
log.setLevel(logging.DEBUG)
handler = logging.FileHandler(filename="logs.log")
formatter = logging.Formatter(
    "%(asctime)s : %(levelname)s : %(message)s ", datefmt="%Y/%m/%d %H:%M:%S"
)
handler.setLevel(logging.DEBUG)
handler.setFormatter(formatter)
log.addHandler(handler)


class UserManager(IntegerIDMixin, BaseUserManager[UserModel, int]):
    reset_password_token_secret = settings.RESET_PASSWORD_TOKEN_SECRET
    verification_token_secret = settings.VERIFICATION_TOKEN_SECRET

    async def on_after_register(
        self, user: UserModel, request: Optional[Request] = None
    ):
        log.warning(
            "User %r has registered",
            user.id,
        )

    async def on_after_forgot_password(
        self, user: UserModel, token: str, request: Optional[Request] = None
    ):
        log.warning(
            "User %r has forgot their password. Reset token: %r",
            user.id,
            token,
        )

    async def on_after_request_verify(
        self, user: UserModel, token: str, request: Optional[Request] = None
    ):
        log.warning(
            "Verification requested for user %r. Verification token: %r",
            user.id,
            token,
        )
