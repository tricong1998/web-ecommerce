FROM node:16-alpine as builder
LABEL maintainer='Coldzy'
WORKDIR /app
COPY package*.json /app
RUN npm ci
COPY . /app
EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]
