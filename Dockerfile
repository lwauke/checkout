FROM node:12 AS base 

EXPOSE 3000
ENV APP /opt/checkout
WORKDIR $APP
ADD package.json package-lock.json $APP/

FROM base as dev

ENTRYPOINT [ "npm", "run", "dev"]
RUN npm ci
COPY . .
