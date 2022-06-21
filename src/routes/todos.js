const express = require("express");
const functions = require("../db/todos");
const validation = require("../middlewares/schemaValidate");
const createSchema = require("../Validations/createValidate");
const updateSchema = require("../Validations/updateValidate");
const router = express.Router();


router.get("/", async (req, res) => {
  res.send(await functions.getAllTodos());
});

router.get("/create", validation(createSchema),  async (req, res) => {
  res.send(await functions.createTodo(req.query.text));
});

router.get("/getById", async (req, res) => {
  const todo = await functions.getTodoById(req.query.todoId);
  res.send(todo === undefined ? "todo not found" : todo);
});

router.get("/update", validation(updateSchema), async (req, res) => {
  res.send(await functions.updateTodo(req.query.todoId, req.query.text));
});

router.get("/delete", async (req, res) => {
  await functions.deleteTodo(req.query.todoId);
  res.send("Todo deleted");
});

router.get("/isComplete", async (req, res) => {
  res.send(
    await functions.updateTodoCompleted(
      req.query.todoId,
      JSON.parse(req.query.completed)
    )
  );
});

module.exports = router;

// Створити express роутер і додати окремі роути по завданні