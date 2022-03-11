const http = require('http');

const server = new http.Server();

server.on('request', (req, res) => res.end('Hello'));

module.exports = server;