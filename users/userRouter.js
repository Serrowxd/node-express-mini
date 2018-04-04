const express = require('express');

const router = express.Router();

const db = require('../data/db.js');

// handles routes that start with: /api/users

router.get

router.get('/:id/orders/:orderId', (req, res) => {
  res.send(`viewing orders with id ${req.params.orderId} for users with id ${req.params.id}`);
});

// /api/users/orders
router.get('/orders', (req, res) => {
  res.send('inside /api/users/orders');
});
  
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .findById(id)
    // .findBy(userid)
    .then(users => {
      res.json(users[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

router.put('/', (req, res) => {

});

module.exports = router;