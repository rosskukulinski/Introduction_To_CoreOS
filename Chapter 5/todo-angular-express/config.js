var Etcd = require('node-etcd');

var etcdHost = process.env.ETCD_HOST || '172.17.42.1';
var etcdPort = process.env.ETCD_PORT || 4001;
console.log('Connecting to etcd on '+etcdHost+':'+etcdPort);
var etcd = new Etcd(etcdHost, etcdPort);

// Get all Rethinkdb servers from etcd
// We just need one for our connection
var rethinks = etcd.getSync("/services/rethinkdb", {recursive: true})

// Warning: Should add error checking / retry for production use

var nodes = rethinks.body.node.nodes;
nodes.forEach(function (node){
  console.log('Available rethinkdb server on', node.value);
});
var rethink = nodes[0].value;
console.log('Connecting to Rethinkdb on', rethink)

module.exports = {
  rethinkdb: {
    host: rethink,
    port: 28015,
    authKey: '',
    db: 'rethinkdb_ex'
  },
  express: {
     port: 3000
  }
};
