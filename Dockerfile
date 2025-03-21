FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD ["pwd && ls /app && ls /app/dist && node dist/main.js"]
