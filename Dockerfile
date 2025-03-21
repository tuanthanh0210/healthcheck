FROM node:20-alpine

COPY . .

CMD ["node", "dist/main.js"]
