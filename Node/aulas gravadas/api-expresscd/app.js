const express = require('express');
const app = express();
const PORT = 3000;

function myMiddleware(req,res, next){
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
  next();
}

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if(token === "123456"){
    next();
  } else {
    return res.status(401).json({ message: "Não autorizado"});
  }
}

const userValidate = (req, res, next) => {
  const { nome, email } = req.body;

  if(!nome || !email) {
    return res.status(400).json({ message: "Nome e email são campos obrigatórios."})
  }
  next();
}

app.use(myMiddleware);
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express API" });
});

app.get("/protected", authenticate, (req, res) => {
  res.json({ message: "Acesso Permitido" });
});

app.post("/users", userValidate, (req, res) => {
  res.status(201).json({
    message: "Usuário criado com sucesso!",
    dados: req.body,
  });
});

// // creating a server with Vanilla Node
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });