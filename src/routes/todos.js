const express = require("express");
const validation = require("../middlewares/schemaValidate");
const { getTodo, postTodo, getTodoId, changeTodo, removeTodo, updateTodoIsCompleted } = require('../controllers/tasksController');
const validationSchema = require("../Validations/todosValidation");
const router = express.Router();

router.get('/', getTodo);

router.post('/', validation(validationSchema), postTodo);

router.get('/:todoId', getTodoId);

router.put('/:todoId', validation(validationSchema), changeTodo);

router.delete('/:todoId', removeTodo);

router.patch('/:todoId/completed', updateTodoIsCompleted);


module.exports = router;

// Створити express роутер і додати окремі роути по завданні