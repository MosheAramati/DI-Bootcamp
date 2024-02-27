const express = require('express');
const { Module } = require('module');

const router = express.Router();


Module.exports = router

router.get("/moshe", (req, res)=>{
    const newProducts = products.map(item=>{
        return {id: item.id, name : item.name}
    })
    res.json(productsroducts)
})
