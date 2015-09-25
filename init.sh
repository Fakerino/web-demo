#!/bin/bash

php -r "readfile('https://getcomposer.org/installer');" | php
./composer.phar require fakerino/fakerino='~0.8'
./vendor/fakerino/fakerino/build/ods ./vendor/fakerino/fakerino/data