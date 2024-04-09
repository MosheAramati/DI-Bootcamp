const bcrypt =require('bcrypt')
const jwt = require ('jsonwebtoken')
const dotenv = require ("dotenv")
dotenv.config()

const {
    register,
    login,
    allUsers

    
}= require("../models/user.js")

const _allUsers= async (req, res)=>{
    try {
        const users = await allUsers();
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: "not found!"})
    }
}

const _register = async(req, res)=>{
    const {email, password}= req.body;
    const lowerEmail = email.toLowerCase()

    //encryp pass
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password+ "", salt)

    try {
        const user = await register(lowerEmail, hash)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: "email exist"})
    }

}

const _login = async(req, res)=>{
    try {
        const {email, password}= req.body

        const user = await login(email.toLowerCase())

    //check if user exist
    
        if(user.length === 0)
            return res.status(404).json({msg: "email not found"})

    //check pass

        const match = bcrypt.compareSync(password+"", user[0].password)
        if (!match) return res.status(404).json({msg: "wrong password"})
    
    //token

        const userId = user[0].id
        const userEmail = user[0].email

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
        
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: "opps, something whent wrong"})
    }
}

const _logout =(req, res) => {
    //delete cookie from table
    res.clearCookie("myToken");
    req.userId = null;
    req.userEmail = null;
    res.sendStatus(200);
}

module.exports ={
    _register,
    _login,
    _allUsers,
    _logout
}
