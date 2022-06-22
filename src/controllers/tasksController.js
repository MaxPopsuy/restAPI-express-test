const {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  updateTodoCompleted,
} = require("../db/todos");

const postTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await createTodo(text);
    res.status(201).json(newTodo);
  } catch (e) {
    res.status(404).json({
      message: `Something went wrong, ${e}`,
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getTodoId = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Todo with id - ${todoId} not found` });
    }
    res.json(todo);
  } catch (e) {
    res.status(500).json({
      message: `Something went wrong, ${e}`,
    });
  }
};

const changeTodo = async (req, res) => {
  const { todoId } = req.params;
  const { text } = req.body;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Todo with id - ${todoId} not found` });
    }
    const updatedTodo = await updateTodo(todoId, text);
    res.json(updatedTodo);
  } catch (e) {
    res.status(500).json({
      message: `Something went wrong, ${e}`,
    });
  }
};

const removeTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Todo with id - ${todoId} not found` });
    }
    await deleteTodo(todoId);
    res.json({
      message: `Todo with id ${todoId} deleted`,
    });
  } catch (e) {
    res.status(500).json({
      message: `Something went wrong, ${e}`,
    });
  }
};

const updateTodoIsCompleted = async (req, res) => {
  const { todoId } = req.params;
  const { completed } = req.body;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Todo with id - ${todoId} not found` });
    }
    const updatedTodo = await updateTodoCompleted(
      todoId,
      JSON.parse(completed)
    );
    res.json(updatedTodo);
  } catch (e) {
    res.status(500).json({
      message: `Something went wrong, ${e}`,
    });
  }
};

module.exports = {
  getTodo,
  postTodo,
  getTodoId,
  changeTodo,
  removeTodo,
  updateTodoIsCompleted,
};
