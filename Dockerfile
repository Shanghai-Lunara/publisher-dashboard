FROM nginx:latest

LABEL maintainer="hamster-developers@lunara.net"

COPY /dist /usr/share/nginx/html
