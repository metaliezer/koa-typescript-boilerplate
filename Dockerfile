FROM node:14.15.1-alpine

RUN apk add --no-cache &&  mkdir -p /var/www
COPY . /var/www
WORKDIR /var/www

RUN npm -v \
    && npm ci \
    && npm run build \
    && npm cache clean --force

EXPOSE 80
CMD ["node", "--harmony", "--max-http-header-size=262144", "dist/index.js"]
