const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());

server.use(routes);

// Not found
server.use((request, response, next) => {
    const error = new Error('Not found');

    error.status = 404;

    next(error);
});

// Catch all - middleware
server.use((error, request, response, next) => {
    response.status(error.status || 500);

    response.json({ error: error.message });
});

const PORT = 3333;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log('Server is running');
});