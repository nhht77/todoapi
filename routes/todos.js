const express = require('express'),
      router  = express.Router(),
      db      = require('../models');

router.get('/', (req, res) => {
      db.Todo.find()
      .then(todos => res.json(todos))
      .catch( err => res.send(err));
});

router.post("/", (req,res) => {
      db.Todo.create(req.body)
      .then( newTodo => res.status(201).json(newTodo))
      .catch( err => res.send(err));
})

router.get("/:id", (req, res) => {
      db.Todo.findById(req.params.id)
      .then( Todo => res.json(Todo) )
      .catch( err => res.send(err) );
})

router.put("/:id", (req, res) => {
      db.Todo.findByIdAndUpdate({_id: req.params.id}, req.body )
      .then( Todo => res.json(Todo) )
      .catch( err => res.send(err) );
})

router.delete("/:id", (req, res) => {
      db.Todo.findByIdAndDelete({_id: req.params.id})
      .then( res.json({message: "It is deleted"}))
      .catch( err => res.send(err));
})

module.exports = router;