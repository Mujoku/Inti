FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./server.js .
COPY ./package.json .
COPY ./package-lock.json .

RUN npm i

CMD [ "npm", "run", "start" ]


FROM summerwind/actions-runner

# Fix the permission issue on the docker containers
COPY permissions.sh /runner

CMD /runner/permissions.sh && /runner/entrypoint.sh