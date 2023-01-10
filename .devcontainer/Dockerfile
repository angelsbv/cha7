# Installing Node, Nest CLI
ARG NESTCLI_VERSION="9.1.8"
ARG EXPOCLI_VERSION="6.1.0"

FROM node:18.13.0-alpine3.17

USER root

ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN apk update && apk add git

RUN npm i -g @nestjs/cli@${NESTCLI_VERSION}
RUN npm i -g expo-cli@${EXPOCLI_VERSION}