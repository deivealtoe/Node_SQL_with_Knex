const express = require('express');
const routes = require('./routes');

const server = express();

server.use(routes);

const PORT = 3333;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log('Server is running');
});