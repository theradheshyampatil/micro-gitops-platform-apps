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
