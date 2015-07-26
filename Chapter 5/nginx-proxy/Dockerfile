FROM nginx:1.9.3
MAINTAINER Ross Kukulinski "ross@getyodlr.com"

RUN apt-get -yqq update && apt-get -yqq install curl

# Install confd
RUN cd /usr/local/bin \
  && curl -L https://github.com/kelseyhightower/confd/releases/download/v0.9.0/confd-0.9.0-linux-amd64 -o confd \
  && chmod +x confd

RUN rm -rf /etc/nginx/nginx.conf

ADD nginx.toml /etc/confd/conf.d/nginx.toml

ADD templates/nginx.tmpl /etc/confd/templates/nginx.tmpl

ADD confd-watch /usr/local/bin/confd-watch
RUN chmod +x /usr/local/bin/confd-watch

EXPOSE 80

CMD /usr/local/bin/confd-watch
