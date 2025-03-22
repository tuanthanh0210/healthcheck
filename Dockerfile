FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN yarn build

CMD ["node", "dist/main.js"]
