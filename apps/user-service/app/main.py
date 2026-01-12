from fastapi import FastAPI

app = FastAPI(title="User Service")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/users")
def users():
    return [
        {"id": 1, "name": "Radhe"},
        {"id": 2, "name": "DevOps"}
    ]
@app.get("/")
def root():
    return {"service": "user-service", "status": "ok"}
from fastapi import FastAPI
from .db import get_connection

app = FastAPI()

@app.get("/health/db")
def db_health():
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("select 1;")
        cur.fetchone()
        cur.close()
        conn.close()
        return {"db": "ok"}
    except Exception as e:
        return {"db": "error", "detail": str(e)}
