const knex = require('../database/index');

module.exports = {
    notFound(request, response, next) {
        const error = new Error('Not found');

        error.status = 404;

        next(error);
    },
    async catchAll(error, request, response, next) {
        response.status(error.status || 500);

        await knex('errors').insert({
            "status": error.status || 500,
            "error": error.message
        });

        response.json({ error: error.message });
    }
}