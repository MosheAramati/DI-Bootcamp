const express =require('express')
const cors = require('cors')
const router = require('./routes/user.js')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({credentials:true}))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.listen(process.env.PORT|| 5002,()=>{
    console.log(`run on ${process.env.PORT || 5002}`)
})

app.use('/users', router)