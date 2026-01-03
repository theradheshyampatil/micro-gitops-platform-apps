FROM node:18-alpine

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

RUN npm install --production

# Copy app code
COPY index.js .

EXPOSE 3000

CMD ["node", "index.js"]
