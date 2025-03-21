FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM node:20-alpine as runner

WORKDIR /app

COPY --from=builder /app/dist .
COPY --from=builder /app/node_modules .

EXPOSE 3000, 8080

CMD ["node", "dist/main.js"]
