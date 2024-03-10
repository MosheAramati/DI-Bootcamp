const express = require ('express')
const app = express()
const cors = require ("cors")

const port = 3001
app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// function sayHi(req, res){
//     res.send("hello")
// }

app.get('/api/hello',(req, res) =>{res.json({message: "Hello from express"})
})


app.post('/api/world', (req, res)=>{
 const{input} =req.body
 console.log({post: input})
 res.json({
    message:"I received your POST request. This is what you sent me: " + input 
 })
})

app.listen(port,()=>{
    console.log('listening on port', port);
})
