const Product = require('../models/productModel')

//import mongoose
const mongoose = require('mongoose')

// Get all products
const getProducts = async (req, res) => {
    // -1 in sort will put them in descending order (latest first)
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}
// Create a New product
const createProduct = async (req, res) => {
    const {author, title, desc, price, categories} = req.body

    // add doc to db
    try {
        const product = await Product.create({author, title, desc, price, categories})
        res.status(200).json(product)
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
}
//export the functions
module.exports = {
    getProducts,
    createProduct
}
