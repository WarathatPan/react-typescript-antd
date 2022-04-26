FROM nginx:alpine
COPY build /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/static/js/*.map

COPY nginx_conf.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN npm run build