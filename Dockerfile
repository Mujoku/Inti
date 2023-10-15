FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./src/* .
COPY ./server.js .
COPY ./package.json .
COPY ./package-lock.json .

RUN npm i

CMD [ "npm", "run", "start" ]