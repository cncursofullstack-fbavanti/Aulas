/*
  TODOList
  - Receber uma requisição GET e retornar uma lista de itens
  - Receber uma requisição POST para adicionar um novo item
  - Manter os dados em uma lista (array) em memória
  - Retornar dados em formato JSON
  -- Extra
  - Adicione uma rota GET /produtos/:id para buscar o produto pelo ID
  - Adicione validação para evitar nomes vazios
  - Adicione rota DELETE /produtos:id
  -- Extra do Extra
  - Converter validações para middleware
  - Utilizar TOKEN para adicionar camada de segurança
  - Retornar o total da lista, preparando para paginar caso necessário
  - Utilizar o UUID para evitar numeração sequencial
*/

const express = require('express');
const app = express();
const PORT = 3000;
const data = require('./data.json');

app.use(express.json());

// ========== MIDDLEWARES DE SEGURANÇA ==========

// Middleware para validar token de autenticação
const validarToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  // Remove o prefixo "Bearer " se existir
  const tokenLimpo = token?.replace('Bearer ', '');
  
  // Token de exemplo - em produção isso viria de um banco de dados
  const TOKEN_VALIDO = 'meu-token-secreto-123';
  
  if (!tokenLimpo || tokenLimpo !== TOKEN_VALIDO) {
    return res.status(401).json({ 
      message: "Token inválido ou não fornecido" 
    });
  }
  
  next();
};

// Função auxiliar para gerar UUID
const gerarUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// ========== MIDDLEWARES DE VALIDAÇÃO ==========

const validarNome = (req, res, next) => {
  const nome = req.body.nome;
  
  if (!nome) {
    return res.status(400).json({ 
      message: "Nome do produto é um campo obrigatório" 
    });
  }
  
  next();
};

const verificarProdutoDuplicado = (req, res, next) => {
  const nome = req.body.nome;
  const produtoExistente = data.find(p => p.nome.toLowerCase() === nome.toLowerCase());
  
  if (produtoExistente) {
    return res.status(409).json({ 
      message: `Produto "${nome}" já está cadastrado com ID ${produtoExistente.id}` 
    });
  }
  
  next();
};

const validarProdutoExiste = (req, res, next) => {
  const id = req.params.id;
  const produto = data.find(p => p.id === id);
  
  if (!produto) {
    return res.status(404).json({ 
      message: "Produto não encontrado" 
    });
  }
  
  req.produto = produto;
  req.produtoId = id;
  
  next();
};

// ========== ROTAS ==========

// Rota pública (sem token)
app.get("/produtos", (req, res) => {
  res.json({
    data: data,
    total: data.length,
  });
});

// Rota pública (sem token)
app.get("/produtos/:id", validarProdutoExiste, (req, res) => {
  res.json(req.produto);
});

// Rotas protegidas (requerem token)
app.post("/produtos", validarToken, validarNome, verificarProdutoDuplicado, (req, res) => {
  const nome = req.body.nome;
  
  const novoProduto = {
    id: gerarUUID(), // Usa ID aleatório
    nome: nome
  };
  
  data.push(novoProduto);
  
  res.status(201).json({
    message: `Produto ${nome} cadastrado com sucesso!`,
    produto: novoProduto
  });
});

app.delete("/produtos/:id", validarToken, validarProdutoExiste, (req, res) => {
  const index = data.findIndex(p => p.id === req.produtoId);
  const produtoRemovido = data.splice(index, 1)[0];
  
  res.status(200).json({
    message: `Produto ${produtoRemovido.nome} removido com sucesso!`,
    produto: produtoRemovido
  });
});

app.listen(PORT, () => {
  console.log("Server is running");
});