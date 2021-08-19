
exports.up = function(knex) {
  return knex.schema
    .createTable('bands', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('photo');
        table.string('genre');
        table.string('active');
        table.string('lifetime');

        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('bands')
};
