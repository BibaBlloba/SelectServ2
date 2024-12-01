import jwt

from config import settings


def encode_jwt(
    payload: dict, key: str = settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM
):
    encoded = jwt.encode(payload, key, algorithm=algorithm)
    return encoded


def decode_jwt(
    token: str, key: str = settings.JWT_PUBLIC_KEY, algorithm=settings.JWT_ALGORITHM
):
    decoded = jwt.decode(token, key, algorithms=algorithm)
    return decoded
