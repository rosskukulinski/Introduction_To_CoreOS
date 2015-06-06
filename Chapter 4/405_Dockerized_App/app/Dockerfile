FROM iojs:2.2-slim

WORKDIR /src

ADD package.json /src/
RUN npm install
ADD . /src/

EXPOSE 3000

CMD ["/usr/local/bin/iojs", "index.js"]
