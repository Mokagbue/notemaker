
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notesthree').del()
    .then(function () {
      // Inserts seed entries
      return knex('notesthree').insert([
        {notes_title: 'example note title 01', notes_content: 'example note content 01', usersthree_id: 1},
        {notes_title: 'example note title 02', notes_content: 'example note content 02', usersthree_id: 1},
        {notes_title: 'example note title 03', notes_content: 'example note content 03', usersthree_id: 3}
      ]);
    });
};
