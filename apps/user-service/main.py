@app.post("/users/register")
def register_user(user: UserRegister):
    # 1) Create user in Supabase Auth
    res = supabase.auth.sign_up({
        "email": user.email,
        "password": user.password,
        "options": {
            "data": {"name": user.name}
        }
    })

    if not res or not res.user:
        raise HTTPException(status_code=400, detail="Registration failed")

    user_id = res.user.id

    # 2) Insert into public.users table
    db_res = supabase.table("users").insert({
        "id": user_id,
        "name": user.name,
        "email": user.email
    }).execute()

    if db_res.error:
        raise HTTPException(status_code=500, detail="User profile creation failed")

    return {
        "message": "User registered successfully",
        "user": {
            "id": user_id,
            "name": user.name,
            "email": user.email
        }
    }

