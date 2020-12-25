exports.up = function(knex) {
  return knex.schema.createTable('errors', (table) => {
    table.increments('id');
    table.integer('status');
    table.text('error');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('errors');
};
