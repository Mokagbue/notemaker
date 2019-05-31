console.log("Good morning, index.js is functioning just fine!!");

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
// const bcrypt = require('bcryptjs'); //bring in the bcryptjs
// const credentials = req.body;
// const hash = bcrypt.hashSync(credentials.password, 14);
// credentials.password = hash;


// find the user in the database by it's username then
// if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
//   return res.status(401).json({ error: 'Incorrect credentials' });
// }

// the user is valid, continue on


const database = require('./database/dbConfig.js');

const server = express();

// //setting up the Cookies
// const sessionConfig = {
//     secret: 'bananas.are.gross',
//     name: 'monkeybutts',
//     httpOnly: true,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false,
//       maxAge: 1000 * 60 * 1 //cookie timer
//     },
//     //need to add store!!!!!!!!!!!
//     store: new KnexSessionStore({
//       tablename: 'session',
//       sidfieldname: 'sid',
//       knex: database,
//       createtable: true,
//       clearInterval: 100 * 60 * 60,
//     }),
//   };
  
//   server.use(session(sessionConfig));

server.use(express.json());
server.use(logger('combined'));
server.use(cors());
server.use(helmet());

//routes
const noteRoutes = require('./routes/noteRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const loginRoutes = require('./routes/loginRoutes.js');
const logoutRoutes = require('./routes/logoutRoutes.js');
const registerRoutes = require('./routes/registerRoutes.js');

server.use('/api/notes', noteRoutes);
server.use('/api/userstwo', userRoutes);
server.use('/api/login', loginRoutes);
server.use('/api/logout', logoutRoutes);
server.use('/api/register', registerRoutes);

//server tester message
server.get('/', (req, res) => {
    res.send('Let\'s make some Magic!');
});

//port setup
const port = 9000;
server.listen(port, () => console.log(`==API is on port ${port}==`));