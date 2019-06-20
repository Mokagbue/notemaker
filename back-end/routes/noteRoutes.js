//Notes Routes
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

//list all
router.get('/', (req, res) => {
    db('notesfour').then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => res.status(500).json({ error: 'failed to retrieve notes', err }));
  });

  //knex create
router.post('/', (req, res) => {
    const notes = req.body;
    db.insert(notes)
    .into('notesfour')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: 'failed to post a new new note', err });
    });
  });

  //knex return by id
router.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const notes = await db('notesfour').where({ id }).first();
    res.status(200).json(notes);
    } catch (err) {
      res.status(500).json({ error: 'failed to get note by id', err });
    }
  });

   //get note by user id
router.get('/:id/users', (req, res) => {
    const { id } = req.params;
    db('notesfour')
    .join('usersthree', 'notesthree.id', '=', 'users.notes_id')
    .select('notesthree.notes_title as note', 'usersthree.username')
    .where('usersthree.notes_id', id)
    .then(response => {
      console.log(response)
      res.status(200).json(response)
    });
  });

  //knex delete
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('notesfour')
    .where({ id })
    .delete()
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No notes, by that id, found to delete.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json({ message: 'failed to delete note.', err}));
  }); 
  
  //knex update 
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('notesfour')
    .where({ id })
    .update(changes)
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No notes found.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json({ message: 'failed to update note.', err}));
  });

  module.exports = router;