//Users Routes
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

//list all users
router.get('/', (req, res) => {
    db('users').then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
  });

  //create new user
router.post('/', (req, res) => {
    const user = req.body;
    db.insert(user)
    .into('users')
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
    const users = await db('users').where({ id }).first();
    res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'failed get user by that id', err });
    }
  });
  
  // delete user by id
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('users')
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
    db('users')
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