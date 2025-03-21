FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000 8080 80

RUN ls

RUN ls dist

CMD ["yarn", "start"]
