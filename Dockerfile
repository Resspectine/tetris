FROM node:10 as builder
ARG BUILD_VERSION
WORKDIR /app

ENV NODE_OPTIONS "--max-old-space-size=2048"

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN sed "s/\${BUILD_VERSION}/${BUILD_VERSION}/g" config.json.dist > config.json && cat config.json && npm run build

FROM nginx:mainline

COPY config/docker/start-configured.sh /usr/local/bin
COPY config.json.dist /usr/share/frontend-config.json.dist
COPY config/nginx/vhost.conf /etc/nginx/conf.d/default.conf
COPY config/nginx/compression.conf /etc/nginx/compression.conf
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["bash", "/usr/local/bin/start-configured.sh"]
