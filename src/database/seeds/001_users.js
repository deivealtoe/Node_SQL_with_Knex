
exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { username: 'Deivisson' },
        { username: 'Larissa' }
      ]);
    });
};
