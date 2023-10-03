const express = require('express');
const app = express();
const port = 2000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import routes
const routes = require('./routes/index.js');

// Use routes
app.use('/', routes);
app.use(express.static('public', { 'extensions': ['html', 'css'] }));

app.use(expressLayouts);
app.set('header', 'views/partials/header.ejs'); // Define the path to your layout file


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});