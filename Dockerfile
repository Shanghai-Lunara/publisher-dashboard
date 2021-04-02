FROM nginx:latest

LABEL maintainer="hamster-developers@lunara.net"

COPY default.conf /etc/nginx/conf.d/
COPY /dist /usr/share/nginx/html
