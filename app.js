const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
