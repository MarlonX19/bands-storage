
exports.up = function(knex) {
  return knex.schema
    .createTable('bands', function(table) {
        table.increments('id').primary();
        table.string('band_name').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('bands')
};
