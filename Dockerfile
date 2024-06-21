FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

#production stage

FROM node:16-alpine AS production

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY --from=build /app/dist ./dist

COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

CMD ["node", "dist/server.js"]