const { db } = require ('../config/pgconnect.js')

const _getAllProducts = () => {
    return db("products").select("id", "name", "price").orderBy("name")
}

const _searchProduct = () => {
    return db("products").select("id", "name", "price").whereLike("name", `%${name}%`)
}

const _insertProduct = (name, price) => {
    return db("products").insert({name, price},["*"])
}
module.exports ={_getAllProducts, _searchProduct, _insertProduct}