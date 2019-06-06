
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersthree').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersthree').insert([
        {username:"example user name 01", password: "passwordExample01"},
        {username: "example user name 02", password: "passwordExample02"},
        {username: "example user name 03", password: "passwordExample03"}
      ]);
    });
};