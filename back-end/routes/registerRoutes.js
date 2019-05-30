const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


router.post('/', (req, res) => { 
    const credentials = req.body;
  
      const hash = bcrypt.hashSync(credentials.password, 14);
    credentials.password = hash;
  
    db('userstwo').insert(credentials).then(ids => {
      const id = ids[0];
      res.status(201).json({ newUserId: id })
    })
    .catch(err => {
      res.status(500).json(err);
    });
  });
  module.exports = router;