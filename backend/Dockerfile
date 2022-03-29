FROM php:8.0-fpm-alpine as backend-stage

LABEL maintainer="xav"

RUN docker-php-ext-install pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apk add --no-cache $PHPIZE_DEPS \
    && pecl install xdebug-2.9.7 \
    && docker-php-ext-enable xdebug

WORKDIR /var/www/html/backend
COPY . .
