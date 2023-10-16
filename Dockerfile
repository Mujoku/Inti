FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./src/ ./src/
COPY ./server.ts .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .


RUN npm i

CMD [ "npm", "run", "start" ]