const http = require('http');
const routes = require('./prove01-routes');

// Create the nodejs Server
const server = http.createServer(routes.handler);

// Listen on port 3000
server.listen(3000);