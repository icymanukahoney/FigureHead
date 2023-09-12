const express = require('express')
//use express route
const router = express.Router()

// import controller functions
const {
    getProducts,
    createProduct
} = require('../controllers/productController')

//setup a route for each required route 
// GET all products
router.get('/', getProducts)

// POST a new workout
router.post('/', createProduct)

// export the module
module.exports = router

