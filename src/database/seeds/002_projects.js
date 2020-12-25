
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { user_id: 1, title: 'Projeto 1' },
        { user_id: 2, title: 'Projeto 2' }
      ]);
    });
};
