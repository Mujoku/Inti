FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./server.js .
COPY ./package.json .
COPY ./package-lock.json .

RUN npm i
COPY permissions.sh /runner

CMD /runner/permissions.sh && /runner/entrypoint.sh

CMD [ "npm", "run", "start" ]

