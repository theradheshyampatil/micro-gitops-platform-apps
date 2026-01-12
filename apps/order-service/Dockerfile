FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package.json ./

# Install production dependencies
RUN npm install --only=production

# Copy application code (INCLUDING db.js)
COPY index.js .
COPY db.js .

# Order service listens on port 3000
EXPOSE 3000

# Start the service
CMD ["node", "index.js"]
