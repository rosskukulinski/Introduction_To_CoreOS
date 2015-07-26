FROM haproxy:1.5
MAINTAINER Ross Kukulinski "ross@getyodlr.com"

RUN apt-get -yqq update && apt-get -yqq install curl

# Install confd
RUN cd /usr/local/bin \
  && curl -L https://github.com/kelseyhightower/confd/releases/download/v0.9.0/confd-0.9.0-linux-amd64 -o confd \
  && chmod +x confd

RUN rm -rf /etc/haproxy/haproxy.cfg

ADD haproxy.toml /etc/confd/conf.d/haproxy.toml

ADD templates/haproxy.tmpl /etc/confd/templates/haproxy.tmpl

ADD confd-watch /usr/local/bin/confd-watch
RUN chmod +x /usr/local/bin/confd-watch
RUN mkdir /etc/haproxy/

EXPOSE 80

CMD /usr/local/bin/confd-watch
