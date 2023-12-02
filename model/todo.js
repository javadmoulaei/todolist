const mongoose = require("mongoose");

const todo = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 250,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todo);

module.exports = Todo;
