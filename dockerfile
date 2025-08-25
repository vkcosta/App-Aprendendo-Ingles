FROM nginx:alpine

COPY ./dist/estudo /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]