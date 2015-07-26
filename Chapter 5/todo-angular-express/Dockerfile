FROM iojs:2.2

WORKDIR /src

ADD package.json /src/
RUN npm install
ADD . /src/

EXPOSE 3000

CMD /usr/local/bin/iojs /src/app.js
