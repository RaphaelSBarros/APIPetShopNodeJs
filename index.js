const express = require("express");
const router = require("./src/routes/clientes");
const Cliente = require("./src/models/clientes");

const app = express();
const port = 3000;

new Cliente();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});