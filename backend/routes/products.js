const express = require('express')
const multer = require("multer")
const path = require("path")

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads'); // Store uploads in this directory
    },
    //unique name for each file
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, uniqueSuffix + ext); // Use unique filenames
    },
  });
  const upload = multer({ storage });


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

