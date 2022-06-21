const express = require("express");
const morgan = require("morgan");

const todos = require("./routes/todos.js");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/todos", todos);

module.exports = app;

// Імпортувати express
// Імпортувати роутер завдань
// Створити express програму
// Налаштувати парсинг json для express
// Підключити по правильному базовому url роутер завдань
// Експортувати express програму
