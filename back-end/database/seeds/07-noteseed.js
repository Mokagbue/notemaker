
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notesfour').del()
    .then(function () {
      // Inserts seed entries
      return knex('notesfour').insert([
        {notes_title: 'example note title 01', notes_content: 'example note content 01', username: 'Karly'},
        {notes_title: 'example note title 02', notes_content: 'example note content 02', username: 'Sam'},
        {notes_title: 'example note title 03', notes_content: 'example note content 03', username: 'Sam'}
      ]);
    });
};
