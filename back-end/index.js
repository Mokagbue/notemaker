console.log("Good morning, index.js is functioning just fine!!");

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const bcrypt = require('bcryptjs'); //bring in the bcryptjs
const jwt = require('jsonwebtoken');
const jwtSecret = 'batman was here';
const db = require('./database/dbConfig.js');

const server = express();


server.use(express.json());
server.use(cors());
server.use(logger('combined'));
server.use(helmet());

//routes
const noteRoutes = require('./routes/noteRoutes.js');
// const userRoutes = require('./routes/userRoutes.js');
// const loginRoutes = require('./routes/loginRoutes.js');
// const logoutRoutes = require('./routes/logoutRoutes.js');
// const registerRoutes = require('./routes/registerRoutes.js');

server.use('/api/notes', noteRoutes);
// server.use('/api/users', userRoutes);
// server.use('/api/login', loginRoutes);
// server.use('/api/logout', logoutRoutes);
// server.use('/api/register', registerRoutes);

//server tester message
server.get('/', (req, res) => {
    res.send('Let\'s make some Magic!');
});

//list all users
    server.get('/api/users', protected, checkRole('admin'), (req, res) => {
        console.log('decoded token information', req.decodedToken);
    // router.get('/', (req, res) => {
    // router.get('/', protected, (req, res) => {
      db('usersthree')
        .select('id', 'username', 'password')// we normally wouldn't have it return the password
        .then(users => {
          res.json({ users });
        })
        .catch(err => res.send(err));
    });

    //login
      server.post('/api/login', (req, res) => {
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
    
    //register
    server.post('/api/register', (req, res) => { 
        const credentials = req.body;
        const hash = bcrypt.hashSync(credentials.password, 14);
        credentials.password = hash;
        db('usersthree').insert(credentials).then(ids => {
          const id = ids[0];
          res.status(201).json({ newUserId: id })
        })
        .catch(err => {
          res.status(500).json(err);
        });
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
        
    function checkRole(role) {
        return function(req, res, next) {
        // if(req.decodedToken && req.decodedToken.role === role) {
            if(role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: "you are not authorized"})
            }
        }
    }

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

//port setup
const port = 9000;
server.listen(port, () => console.log(`==API is on port ${port}==`));