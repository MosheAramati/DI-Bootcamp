const express =require('express')
const cors = require('cors')
const router = require('./routes/products')

const app = express()

app.listen(process.env.PORT|| 5001,()=>{
    console.log(`run on ${process.env.PORT || 5001}`)
})

app.use('/api/products', router)