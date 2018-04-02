const express = require('express'); // brings in the express package, similar to import react.

const server = express(); // calls express as a function

server.get('/', function(req, res) { // object that represents a request, then a response (req, res).
  // res.send('Api Running.......'); // sends the server what you have here.
  // res.send({ api: 'Running...' });
  res.json({ api: 'Running...' }); // sends it as a .json
});

const port = 5000; // defines port the server will listen to
server.listen(port, () => console.log('API Running on port 5000')); // listens for traffic on the port defined. () defines a callback function that you can use to put something in the console or other things.
