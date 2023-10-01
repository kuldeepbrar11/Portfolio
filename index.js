const express = require('express');
const app = express();
const port = 2000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import routes
const routes = require('./routes');

// Use routes
app.use('/', routes);
app.use(express.static('public', { 'extensions': ['html', 'css'] }));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});