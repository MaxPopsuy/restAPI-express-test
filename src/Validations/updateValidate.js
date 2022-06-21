const yup = require("yup");

const updateSchema = yup.object({
  todoId: yup.string().min(21).max(36).required(),
  text: yup.string().required(),
});

module.exports = updateSchema;
