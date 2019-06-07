//MVP Login
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);
const bcrypt = require('bcryptjs'); //bring in the bcryptjs
const jwt = require('jsonwebtoken');

  function generateToken(user){
    const jwtPayload = {
      ...user,
      role: 'admin',
    };
    const jwtSecret = 'batman was here';
    const jwtOptions = {
      expiresIn: '1m'
    };
    return jwt.sign(jwtPayload, jwtSecret, jwtOptions); 
  }
  router.post('/', (req, res) => {
    const credentials = req.body;
    db('usersthree').where({username: credentials.username}).first().then(user => {
  //compareSync is how we figure that out, compares the given password and the 
  //actual password
  if (user && bcrypt.compareSync(credentials.password, user.password)) {
    const token = generateToken(user); // Get your token right here!
    res.status(200).json({ welcome: user.username, token })
      } else {
        res.status(401).json({ message: "Entry Denied!" })
      }
    })
    .catch(err => res.status(500).json({ err }));
  });
  
  module.exports = router;