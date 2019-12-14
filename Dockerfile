FROM nginx:alpine
LABEL maintainer="0xhjohnson"
ENV DIRPATH /usr/src/app
WORKDIR $DIRPATH
COPY . $DIRPATH

RUN apk update && \
    apk add yarn && \
    yarn install --frozen-lockfile && \
    yarn cache clean && \
    yarn build


RUN rm -rf /usr/share/nginx/html
COPY ./public /usr/share/nginx/html

EXPOSE 80
