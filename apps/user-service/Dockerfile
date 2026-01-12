# Use small, official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy only application code
COPY app/ app/

# Install runtime dependencies
RUN pip install --no-cache-dir fastapi uvicorn
# ✅ ADD THIS LINE
RUN pip install --no-cache-dir psycopg2-binary
# Expose port
EXPOSE 8000

# Run application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
