// index.js, Kuldeep Singh Brar, 301342309, 1 October 2023


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});


module.exports = router;