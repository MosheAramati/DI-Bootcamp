const express = require("express");
const {
    register,
    login,
    // users,
    // userById,
    // update
} =require('../controllers/controllers.js')


const router = express.Router();

// register
router.post('/register', register);

// login
router.post('/login',login);

// // users
// router.get('/users', users);

// // user by id
// router.get('/users/:id', userById)

// //Update by id
// router.put('/users/:id', update)


module.exports = router;