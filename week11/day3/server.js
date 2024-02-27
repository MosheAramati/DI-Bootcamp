const bodyParser = require('body-parser')

const express =  require("express")
const{products} = require("./db.js")
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3006)

app.get("/moshe", (req, res)=>{
    // const newProducts = products.map(item=>{
    //     return {id: item.id, name : item.name}
    // })
    res.json(productsroducts)
})

// app.get("/moshe/:id", (req, res)=>{
//     console.log(req.params);
//     const { id } = req.params;
//     const product = products.find((item)=> item.id == id);

//     if(!product){
//         res.status(404).json({msg:"product not found"})
//     }
  
//     res.json(product)
// });

app.get("/moshe/search", (req, res)=>{
    console.log(req.query);
    const { name } = req.query;
    const filterproduct = products.filter((item)=> {
    return item.name.toLowerCase().includes(name.toLocaleLowerCase())
});
    
    if(!filterproduct.length === 0){
        return
        res.status(404).json({msg:"product not found"})
    }
  
    res.json(filterproduct)
});

//post, put, delete

//create a new product
app.post("/moshe/search/", (req, res)=>{
    console.log(req.body);

    const {name, price }= req.body

    const newProduct ={
        id : products.length +1,
        name,
        price
    } ;    
    products.push(newProduct);
    res.json(products)
});

// update a product:
// PUT - id in params , name & price in the body

app.put("/moshe/search/:id", (req, res)=>{
    const {id} = req.params;
    const {name, price }= req.body

    const indx = products.findIndex(item => item.id ==id);

    products[indx] = {...products[indx], name, price}
    res.json(products)
    if (indx=== -1)
    return res.sendStatus(404);

});

//DELETE - delete one product usin id from params
app.delete("/moshe/search/:id", (req, res)=>{
    const {id} = req.params;

    const indx = products.findIndex(item => item.id ==id);
    if (indx=== -1)
    return res.sendStatus(404);

    products.splice(indx, 1);

    res.json (products)
    
});


