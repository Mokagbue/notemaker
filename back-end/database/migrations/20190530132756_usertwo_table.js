
exports.up = function(knex) {
    return knex.schema.createTable('userstwo', users => {
      users.increments();
      users.string('username', 128).notNullable().unique();
      users.string('password', 128).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('userstwo');
  };
