var http = require('http');

var instance = process.env.INSTANCE || 'unknown instance';
var host = process.env.HOST || 'localhost';

var app = http.createServer(function (req, res) {
  res.end('Hello from ' + instance + ' running on ' + host + '\n');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
