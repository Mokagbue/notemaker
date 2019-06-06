
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersthree').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersthree').insert([
        {username:"exampleuser01", password: "passwordExample01"},
        {username: "exampleuser02", password: "passwordExample02"},
        {username: "exampleuser03", password: "passwordExample03"}
      ]);
    });
};