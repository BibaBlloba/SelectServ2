from typing import Optional

from fastapi import Request
from fastapi_users import BaseUserManager, IntegerIDMixin

from config import settings
from logs import log
from models import UserModel


class UserManager(IntegerIDMixin, BaseUserManager[UserModel, int]):
    reset_password_token_secret = settings.RESET_PASSWORD_TOKEN_SECRET
    verification_token_secret = settings.VERIFICATION_TOKEN_SECRET

    async def on_after_register(
        self, user: UserModel, request: Optional[Request] = None
    ):
        log.info(
            "User %r has registered. Email: %r",
            user.id,
            user.email,
        )

    async def on_after_forgot_password(
        self, user: UserModel, token: str, request: Optional[Request] = None
    ):
        log.info(
            "User %r has forgot their password. Reset token: %r",
            user.id,
            token,
        )

    async def on_after_request_verify(
        self, user: UserModel, token: str, request: Optional[Request] = None
    ):
        log.info(
            "Verification requested for user %r. Verification token: %r",
            user.id,
            token,
        )
