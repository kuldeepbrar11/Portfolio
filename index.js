const express = require('express');
const app = express();
const port = 2001;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import routes
const routes = require('./routes/index.js');

// Use routes
app.use('./views/home.ejs', routes);
app.use(express.static('public', { 'extensions': ['html', 'css'] }));

app.use('/public/pdfs', express.static('pdfs'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});