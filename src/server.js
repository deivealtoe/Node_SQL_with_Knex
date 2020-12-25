const express = require('express');
const routes = require('./routes');
const { notFound, catchAll } = require('./middlewares/index');

const server = express();

server.use(express.json());

server.use(routes);

server.use(notFound);
server.use(catchAll);

const PORT = 3333;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log('Server is running');
});