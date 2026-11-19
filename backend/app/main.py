
from fastapi import FastAPI

from app.api.v1.router import api_router

app = FastAPI(
    title="DataBridge",
    description="A modular data integration platform",
    version="0.1.0"
)

app.include_router(api_router, prefix="/api/v1")


@app.get("/")
def root():
    return {
        "application": "DataBridge",
        "message": "Welcome to DataBridge API"
    }
