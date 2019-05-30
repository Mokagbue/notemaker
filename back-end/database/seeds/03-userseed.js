
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userstwo').del()
    .then(function () {
      // Inserts seed entries
      return knex('userstwo').insert([
        {username:"example user name 1", password: "passwordExample1"},
        {username: "example user name 2", password: "passwordExample2"},
        {username: "example user name 3", password: "passwordExample3"}
      ]);
    });
};
