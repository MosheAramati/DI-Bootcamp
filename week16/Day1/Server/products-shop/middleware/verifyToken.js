const jwt =  require ('jsonwebtoken')
const dotenv = require ('dotenv')
dotenv.config()

const verifyToken = (req, res, next)=>{
    const accessToken = req.cookies.token

    console.log("accesToken=>", accessToken)


    if(!accessToken) return res.status(401).json({msg: "unauthorized"})

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decode)=>{
        if(err) return res.status(403).json({msg: "forbidden"})

    req.userid = decode.userid
    req.useremail = decode.useremail
    next()
    })
}

module.exports= {
    verifyToken
}
