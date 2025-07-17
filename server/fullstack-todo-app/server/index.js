const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const todos = [];

app.get('/api/todos', (req, res) => res.json(todos));

app.post('/api/todos', (req, res) => {
  todos.push(req.body);
  res.status(201).json({ success: true });
});

app.listen(5000, () => console.log('Server running on port 5000'));
