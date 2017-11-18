var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
//provide a sensible default for local development
mongodb_connection_string = 'mongodb://127.0.0.1:27017/madeiras-mg';
//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + 'madeiras-mg';
}
database(mongodb_connection_string);

http.createServer(app)
  .listen(server_port, server_ip_address, function() {
    console.log('Servidor iniciado com sucesso em ', server_ip_address, ':', server_port);
  });
