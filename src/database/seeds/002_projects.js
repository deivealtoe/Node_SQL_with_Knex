
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { user_id: 22, title: 'rowValue1' }
      ]);
    });
};
