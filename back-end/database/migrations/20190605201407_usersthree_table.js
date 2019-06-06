
exports.up = function(knex) {
    return knex.schema.createTable('usersthree', users => {
      users.increments("id");
      users.string('username', 128).notNullable().unique();
      users.string('password', 128).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('usersthree');
  };
