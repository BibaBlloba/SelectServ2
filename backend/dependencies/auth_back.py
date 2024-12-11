from fastapi_users.authentication import AuthenticationBackend

from dependencies.strategy import get_database_strategy
from transport import bearer_transport

authentication_backend = AuthenticationBackend(
    name="access_tokens_db",
    transport=bearer_transport,
    get_strategy=get_database_strategy,
)
