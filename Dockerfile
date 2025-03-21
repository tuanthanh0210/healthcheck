FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD ["node", "dist/main.js"]
