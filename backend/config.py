from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DB_HOST: str
    DB_PORT: int
    DB_USER: str
    DB_PASS: str
    DB_NAME: str
    JWT_SECRET_KEY_P: str
    JWT_ALGORITHM_P: str
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES_P: int
    JWT_ACCESS_COOKIE_NAME_P: str
    RESET_PASSWORD_TOKEN_SECRET_P: str
    VERIFICATION_TOKEN_SECRET_P: str

    @property
    def RESET_PASSWORD_TOKEN_SECRET(self):
        return self.RESET_PASSWORD_TOKEN_SECRET_P

    @property
    def VERIFICATION_TOKEN_SECRET(self):
        return self.VERIFICATION_TOKEN_SECRET_P

    @property
    def DATABASE_URL_asyncpg(self):
        return f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASS}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"

    @property
    def JWT_ACCESS_COOKIE_NAME(self):
        return self.JWT_ACCESS_COOKIE_NAME_P

    @property
    def DATABASE_URL_psycopg(self):
        return f"postgresql+psycopg://{self.DB_USER}:{self.DB_PASS}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"

    @property
    def JWT_SECRET_KEY(self):
        return self.JWT_SECRET_KEY_P

    @property
    def JWT_ALGORITHM(self):
        return self.JWT_ALGORITHM_P

    @property
    def JWT_ACCESS_TOKEN_EXPIRE_MINUTES(self):
        return self.JWT_ACCESS_TOKEN_EXPIRE_MINUTES_P

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
