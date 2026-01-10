const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const tasks = [
  {
    id: 0,
    title: "Drink Water",
  },
  {
    id: 1,
    title: "Relax"
  }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
  }

  tasks.push(newTask);
  res.status(201).json(newTask);
});
