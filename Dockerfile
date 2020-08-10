FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

ENV NODE_ENV=development