FROM php:7.0-apache

COPY config/virtualhost.conf /etc/apache2/sites-enabled/virtualhost.conf
RUN apt-get update -qq && apt-get install -y -qq git curl wget
COPY ./ /var/www/html
RUN ./init.sh
