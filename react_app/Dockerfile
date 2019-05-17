FROM node:10-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY public ./public
COPY src ./src

CMD ["npm","start"]