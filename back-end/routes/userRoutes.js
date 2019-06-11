//Users Routes
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);
const jwtSecret = 'batman was here';
const jwt = require('jsonwebtoken');

//list all users
router.get('/', protected, (req, res) => {
// router.get('/', protected, (req, res) => {
  db('usersthree')
    .select('id', 'username', 'password')// we normally wouldn't have it return the password
    .then(users => {
      res.json({ users });
    })
    .catch(err => res.send(err));
});

function protected(req, res, next) {
  const token = req.headers.authorization;
  if(token){
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err){
        //token verification failed
        res.status(401).json({ message: 'invalid token'});
      } else {
        // token is valid
        req.decodedToken = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({ message: "Not authorized."})
  }
  next();
  }

  //create new user
router.post('/', (req, res) => {
    const user = req.body;
    db.insert(user)
    .into('usersthree')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: 'failed to create new user.', err });
    });
  });

  //get one user by id
router.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const users = await db('usersthree').where({ id }).first();
    res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'failed get user by that id', err });
    }
  });
  
  // delete user by id
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('usersthree')
    .where({ id })
    .delete()
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No users found to delete.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catach(err => res.status(500).json({ message: 'failed to delete user.', err}));
  }); 
  
  //edit user by id
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('usersthree')
    .where({ id })
    .update(changes)
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No users found.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catach(err => res.status(500).json({ message: 'failed to update user.', err }));
  });

  

  module.exports = router;