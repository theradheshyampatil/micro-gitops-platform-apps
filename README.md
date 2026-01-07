# Micro GitOps Platform – Application Source Repository

## What is this repository?

This repository contains the **application source code** for the Micro GitOps Platform.

Think of this repository as:
👉 **Where developers write code**

This repository is responsible for:
- Writing backend logic
- Building Docker images
- Running Jenkins CI pipelines

It does **NOT** deploy to Kubernetes.

---

## Services in this Repository

### user-service
- Language: Python
- Framework: FastAPI
- Port: 8000

Endpoints:
- `/health`
- `/docs` (Swagger UI)

---

### product-service
- Language: JavaScript
- Framework: Node.js (Express)
- Port: 3000

Endpoints:
- `/health`

---

### order-service
- Language: JavaScript
- Framework: Node.js (Express)
- Port: 4000

Endpoints:
- `/health`
- `/orders`

---

## CI/CD Flow

This repository is used by **Jenkins**.

Jenkins does the following:
1. Pulls source code
2. Builds Docker images
3. Tags images
4. Pushes images to AWS ECR

Jenkins does **NOT** deploy to Kubernetes.

---

## AWS ECR Repositories

- user-service
- product-service
- order-service

---

## Rules

❌ Do NOT put Kubernetes YAML here  
❌ Do NOT put secrets here  
✅ Only application code and Docker files

---

## Why this design?

This separation keeps:
- CI clean
- Security strong
- Deployments predictable
