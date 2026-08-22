require("dotenv").config()
const PORT = process.env.PORT

const express = require('express');
const app = express()
app.use(express.json()); 

app.use((req, res, next) => {
  console.log("You are highly welcome!");
  next();
})

app.get('/', (req, res) => res.send('My Week 2 API!'));

app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: '400 missing data' });
  // simulate DB save
  res.status(201).json({ message: `Hello, [${name}]!` });
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
      res.send("user (id) profile");
})

app.listen(3000, () => console.log("Example app listening on port 3000"));
