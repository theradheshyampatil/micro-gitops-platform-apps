from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# --------------------
# Models
# --------------------
class UserRegister(BaseModel):
    name: str
    email: str
    password: str


# --------------------
# Health check
# --------------------
@app.get("/health")
def health():
    return {"status": "ok"}


# --------------------
# User registration (TEMP: no DB yet)
# --------------------
@app.post("/users/register")
def register_user(user: UserRegister):
    return {
        "message": "User registered successfully",
        "user": {
            "name": user.name,
            "email": user.email
        }
    }
