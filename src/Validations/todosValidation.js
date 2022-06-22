const yup = require("yup");

const createSchema = yup.object({
  text: yup.string().required(),
});

module.exports = createSchema;
