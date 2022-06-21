// Імпортувати express програму і запустити сервер
const app = require("./src/app");
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
