const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(9000, () => {
  console.log('Server is listening on port 9000');
});