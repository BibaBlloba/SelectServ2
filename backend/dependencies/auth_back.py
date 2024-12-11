from fastapi_users.authentication import AuthenticationBackend

from auth import bearer_transport
from dependencies.strategy import get_database_strategy

authentication_backend = AuthenticationBackend(
    name="access_tokens_db",
    transport=bearer_transport,
    get_strategy=get_database_strategy,
)
