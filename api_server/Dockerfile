FROM node:10-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install pm2 -g
RUN npm install

COPY ecosystem.config.js .

COPY index.js .

CMD [ "pm2-docker", "start", "ecosystem.config.js" ]