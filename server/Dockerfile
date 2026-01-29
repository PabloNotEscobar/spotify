# Base
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
# Сначала копируем только схему и генерируем клиент
COPY ./prisma ./prisma/
RUN npx prisma generate
# Затем копируем всё остальное
COPY . .

# --- ЭТАП 1: Development ---
FROM base AS development
CMD sh -c "npx prisma migrate deploy && npm run dev"

# --- ЭТАП 2: Build ---
FROM base AS build
RUN npm run build

# --- ЭТАП 3: Production ---
FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
# Устанавливаем только prod-зависимости
RUN npm install --only=production

COPY --from=build /app/prisma ./prisma
RUN npx prisma generate

# Копируем результат компиляции
COPY --from=build /app/dist ./dist


CMD sh -c "npx prisma migrate deploy && node dist/main.js"
