//MVP Login
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

  
  router.post('/', (req, res) => {
    const credentials = req.body;
    db('users').where({username: credentials.username}).first().then(user => {
  //compareSync is how we figure that out, compares the given password and the 
  //actual password
  if(user && bcrypt.compareSync(credentials.password, user.password)) {
    //checking session username matches given
    req.session.username = user.username
    res.status(200).json({ welcome: user.username })
      } else {
        res.status(401).json({ message: "Entry Denied!" })
      }
    })
    .catch(err => res.status(500).json({ err }));
  });
  
  module.exports = router;