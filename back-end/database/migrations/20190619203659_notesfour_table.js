exports.up = function(knex, Promise) {
    return knex.schema.createTable('notesfour', function(notes) {
        notes.increments();
        notes.string('notes_title').notNullable();
        notes.text('notes_content').notNullable();
        notes.string('username', 128).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notesfour');
  };
