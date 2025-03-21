FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000 8080 80

CMD ["sh", "-c", "touch .env && node dist/main.js"]
