FROM node:22.6.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]

