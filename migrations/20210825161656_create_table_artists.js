
exports.up = function (knex) {
  return knex.schema
    .createTable('artists', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('photo');
      table.string('genre');
      table.string('active');
      table.date('birthday');

      table.integer('band_id');
      table.foreign('band_id').references('id').inTable('bands');

      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('artists')
};
