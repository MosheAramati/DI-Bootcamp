const express = require('express')
const {
    getAllProducts,
    getProductsById,
} = require ("../controllers/products.js")

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProductsById)

module.exports= router