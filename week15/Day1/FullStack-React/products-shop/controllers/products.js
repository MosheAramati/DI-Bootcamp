const {
    _getAllProducts,
    _getProductsById
}= require("../models/products.js")

const getAllProducts = async(req,res) => {
    try {
        const data = await _getAllProducts()
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(404).jsom({ msg: error.message })
    } 
}

const getProductsById = async(req,res)=> {
    try {
        const {id} = req.params
        const data = await _getProductsById(id)
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(404).jsom({ msg: error.message })
    }
}

module.exports ={
    getAllProducts,
    getProductsById,
}