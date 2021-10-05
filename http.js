const http = require('http');
var agent = new http.Agent({});
var conn = agent.createConnection;
console.log('Connection is succesfully created arshiya!');
console.log('Connection: ', conn);
