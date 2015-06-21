var http = require('http');
var os = require("os");

var instance = process.env.INSTANCE || 'unknown instance';
var host = os.hostname();

var app = http.createServer(function (req, res) {
  console.log('Request from ', req.connection.remoteAddress);
  res.end('Hello from ' + instance + ' running on ' + host + '\n');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
