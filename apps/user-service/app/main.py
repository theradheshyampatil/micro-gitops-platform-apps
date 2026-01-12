from fastapi import FastAPI
from .db import get_connection

app = FastAPI(title="User Service")

@app.get("/")
def root():
    return {"service": "user-service", "status": "ok"}

@app.get("/health")
def health():
    return {"status": "ok"}

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

@app.get("/users")
def users():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("select id, name, email from users")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return [
        {"id": r[0], "name": r[1], "email": r[2]}
        for r in rows
    ]
