FROM node:18-alpine

WORKDIR /app

# Copy package files first (better caching)
COPY package.json package-lock.json* ./

RUN npm install --only=production

# Copy application source
COPY index.js .
COPY db.js .

EXPOSE 3000

CMD ["node", "index.js"]
