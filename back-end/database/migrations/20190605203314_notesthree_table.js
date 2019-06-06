exports.up = function(knex, Promise) {
    return knex.schema.createTable('notesthree', function(notes) {
        notes.increments();
        notes.string('notes_title').notNullable();
        notes.text('notes_content').notNullable();
        notes.integer("usersthree_id").notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notesthree');
  };
