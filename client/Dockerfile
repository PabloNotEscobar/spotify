# Base
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Development
FROM base AS development
CMD ["npm", "run", "dev"]

# Stage 1: Сборка
FROM base AS build
RUN npm run build

# Stage 2: Продакшн (запуск сервера Next.js)
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]