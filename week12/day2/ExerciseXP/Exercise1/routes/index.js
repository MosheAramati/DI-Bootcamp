const express = require('express')
const router = express.Router()

// Homepage route
router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// About Us route
router.get('/about', (req, res) => {
  res.send('About Us page');
});


module.exports = router