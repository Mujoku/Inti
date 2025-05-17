FROM node:22.15.1-alpine3.21

WORKDIR /usr/src/app

COPY ./src/ ./src/
COPY ./server.ts .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .


RUN npm i

CMD [ "npm", "run", "start" ]