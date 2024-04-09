const express = require('express')
const {verifyToken} = require('../middleware/verifyToken.js')
const dotenv = require ("dotenv")
const jwt = require ('jsonwebtoken')
dotenv.config()

const {
    _register,
    _login, 
    _allUsers,
    _logout
} = require ("../controllers/user.js")

const router = express.Router()

router.post('/register', _register)

router.post('/login', _login)

router.get('/', verifyToken, _allUsers)

router.get ('/logout', _logout)

router.get ('/verify', verifyToken, (req, res)=>{
   // res.sendStatus(200)

   const userId = req.userId
    const userEmail = req.userEmail

    const secret = process.env.ACCESS_TOKEN_SECRET

    const myToken = jwt.sign(
            {userId, userEmail},
            secret,
            {expiresIn: "60s" }
        );
        
    res.cookie("token", myToken, {
        maxAge: 60 * 1000,
        httpOnly: true
    })

    res.json({token: myToken})
})

module.exports= router