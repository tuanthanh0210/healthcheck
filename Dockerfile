FROM node:20-alpine

COPY . .

RUN yarn install

CMD ["node", "dist/main.js"]
