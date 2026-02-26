# 1️⃣ Base
FROM node:20-slim AS base

WORKDIR /app

RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

# 2️⃣ Development
FROM base AS development
CMD sh -c "npx prisma migrate deploy && npm run dev"

# 3️⃣ Build
FROM base AS build
COPY . .
RUN npm run build

# 4️⃣ Production
FROM node:20-slim AS production

WORKDIR /app

RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=build /app/prisma ./prisma
RUN npx prisma generate

COPY --from=build /app/dist ./dist

CMD sh -c "npx prisma migrate deploy && node dist/main.js"