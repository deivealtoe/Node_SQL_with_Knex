const knex = require('../database/index');

module.exports = {
    async index(request, response, next) {
        try {
            const { user_id, page = 1 } = request.query;

            const query = knex('projects')
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')
                .where('users.deleted_at', null)
                .limit(5)
                .offset((page - 1) * 5);
            
            const countObj = knex('projects').count();

            if (user_id) {
                query.where({ user_id });

                countObj.where({ user_id });
            }

            const [count] = await countObj;
            console.log(count);

            response.header('X-Total-Count', count["count"]);

            const results = await query;

            return response.json(results);
        } catch (error) {
            next(error);
        }
    },
    async create(request, response, next) {
        try {
            const { title, user_id } = request.body;

            await knex('projects').insert({
                title,
                user_id
            });

            return response.status(201).send();
        } catch (error) {
            next(error);
        }
    },
    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex('projects').where({ id }).del();

            response.status(200).send();
        } catch (error) {
            next(error);
        }
    }
}