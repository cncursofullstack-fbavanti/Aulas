/*
  TODOList
  - Receber uma requisição GET e retornar uma lista de itens
  - Receber uma requisição POST para adicionar um novo item
  - Manter os dados em uma lista (array) em memória
  - Retornar dados em formato JSON
*/

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});