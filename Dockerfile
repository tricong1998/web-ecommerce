FROM node:16 as builder
LABEL maintainer='Coldzy'
WORKDIR /src
COPY . .
RUN npm ci
RUN npm run build
RUN mkdir build_folder
RUN mv package.json package-lock.json next.config.js .next src/pages public ./build_folder

FROM node:16-alpine
ARG WORK_DIR=/app
WORKDIR ${WORK_DIR}
ENV NODE_ENV=production
COPY --from=builder /src/build_folder .
RUN npm ci --production --no-audit
EXPOSE 3000

ENTRYPOINT ["node", "node_modules/.bin/next", "start"]
