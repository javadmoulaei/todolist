const Todo = require("../model/todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render("index", {
      pageTitle: "کارهای روزمره",
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};
