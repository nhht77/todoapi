const express = require('express'),
      router  = express.Router(),
      db      = require('../models');

router.get('/', (req, res) => {
      db.Todo.find()
      .then(todos => res.json(todos))
      .catch( err => res.send(err));
});

module.exports = router;