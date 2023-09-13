const express = require('express')
//use express route
const router = express.Router()

// import controller functions
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')

//setup a route for each required route 

// GET all products
router.get('/', getProducts)

// GET a SINGLE product
router.get('/:id', getProduct)

// POST a new product
router.post('/', createProduct)

// DELETE a product
router.delete('/:id', deleteProduct)

// UPDATE all products
router.patch('/:id', updateProduct)

// export the module
module.exports = router

