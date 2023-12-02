const Todo = require("../model/todo");

exports.addTodo = async (req, res) => {
  try {
    if (!req.body.todo) return res.redirect("/");
    const todo = await Todo.create({ text: req.body.todo });

    if (todo) res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    if (!req.params.id) return res.redirect("/");

    await Todo.findByIdAndRemove(req.params.id);

    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.completedTodo = async (req, res) => {
  try {
    if (!req.params.id) return res.redirect("/");
    const todo = await Todo.findById(req.params.id);

    if (!todo) res.redirect("/");

    todo.completed = true;

    await todo.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
