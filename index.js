const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

server.listen(9000, () => {
  console.log('Server is listening on port 9000');
});