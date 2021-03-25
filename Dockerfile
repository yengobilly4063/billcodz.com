FROM nginx:alpine

RUN yarn install && yarn build

COPY ./build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
