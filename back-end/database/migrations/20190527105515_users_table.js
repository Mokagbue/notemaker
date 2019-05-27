
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(users) {
        users.increments();
        users.string('username', 128).notNullable().unique();
        users.integer('notes_id').notNullable().unsigned().references('id').inTable('notes');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };