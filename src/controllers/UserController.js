const knex = require('../database/index');

module.exports = {
    async index(request, response) {
        const results = await knex('users');

        return response.json(results);
    },
    async create(request, response, next) {
        try {
            const { username } = request.body;

            await knex('users').insert({
                username
            });

            return response.status(201).send();
        } catch (error) {
            next(error);
        }
    },
    async update(request, response, next) {
        try {
            const { username } = request.body;
            const { id } = request.params;

            await knex('users').update({ username }).where({ id });

            return response.status(200).send();
        } catch (error) {
            next(error);
        }
    },
    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex('users').where({ id }).del();

            return response.status(200).send();
        } catch (error) {
            next(error);
        }
    }
}