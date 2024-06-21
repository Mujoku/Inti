FROM node:20.14.0-alpine3.20

WORKDIR /usr/src/app

COPY ./src/ ./src/
COPY ./server.ts .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .


RUN npm i

CMD [ "npm", "run", "start" ]