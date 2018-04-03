const express = require('express'); // brings in the express package, similar to import react.

const morgan = require('morgan'); // brings in the morgan package, npm install morgan.

const db = require('./data/db.js'); // same as import. This in react would look like import db from './data/db.js';

const server = express(); // calls express as a function

// middelware
server.use(morgan('dev')); // uses the string to format something.

server.get('/', function (req, res) { // object that represents a request, then a response (req, res).
  // res.send('Api Running.......'); // sends the server what you have here.
  // res.send({ api: 'Running...' });
  res.json({ api: 'Running...' }); // sends it as a .json
});

server.get('/api/users', (req, res) => { // can also use arrow functions here instead of saying function.
  // get the data.
  db // this can all be done in-line as well.
    .find()
    .then(users => { // send the data.
      res.json(users); // by default sends a status code of 200, or OK.
    })
    .catch(error => { // send the error if there is one.
      // handle it.
      res.status(500).json(error); // sends an error if it exists.
    });
});

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;

  db
    .findById(id) // finds it by the ID, aka the paramater defined in db.js - `findById`
    .then(users => { 
      res.json(users[0]); // grabs the first user in the array, rather than the whole array.
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

const port = 5000; // defines port the server will listen to
server.listen(port, () => console.log('API Running on port 5000')); // listens for traffic on the port defined. () defines a callback function that you can use to put something in the console or other things.
