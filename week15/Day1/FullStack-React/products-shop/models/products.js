const{db} = require('../config/db.js')

const _getAllProducts = () => {
    return db ('products').select("id", "name", "price")
}

const _getProductsById = (id) => {
    return db ('products').select("id", "name", "price")
    .where({id})
}

module.exports ={
    _getAllProducts,
    _getProductsById,
}