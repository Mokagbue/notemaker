
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notestwo', function(notes) {
        notes.increments();
        notes.string('notes_title').notNullable();
        notes.text('notes_content').notNullable();
        notes.integer("usersthree_id").unique().notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notestwo');
  };
