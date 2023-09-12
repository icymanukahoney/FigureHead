const express = require('express')
//use express route
const router = express.Router()

// import controller functions
const {
    getProducts,
    createProduct,
    deleteProduct
} = require('../controllers/productController')

//setup a route for each required route 

// GET all products
router.get('/', getProducts)

// POST a new product
router.post('/', createProduct)

// DELETE a producr
router.delete('/:id', deleteProduct)

// export the module
module.exports = router

