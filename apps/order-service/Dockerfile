FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency definitions first (for layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy application code
COPY index.js .

# Order service listens on port 4000
EXPOSE 4000

# Start the service
CMD ["node", "index.js"]

