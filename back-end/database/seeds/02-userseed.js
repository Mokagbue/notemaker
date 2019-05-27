
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'example username 1', notes_id: '1'},
        {username: 'example username 2', notes_id: '2'},
        {username: 'example username 3', notes_id: '3'}
      ]);
    });
};
