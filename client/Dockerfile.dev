# Specify a base image
FROM node:12.18.3-alpine3.12

WORKDIR '/app'

COPY ./package.json .

RUN yarn install --frozen-lockfile

COPY . .

CMD [ "yarn", "start" ]
