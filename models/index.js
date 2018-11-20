const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('localhost:27017/todoapi');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");