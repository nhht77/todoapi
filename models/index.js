const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/todoapi', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");