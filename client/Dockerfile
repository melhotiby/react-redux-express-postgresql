# Specify a base image
FROM node:12.18.3-alpine3.12 as builder

WORKDIR '/app'

COPY ./package.json .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/defaul.prod.conf /etc/nginx/conf.g/default.conf
