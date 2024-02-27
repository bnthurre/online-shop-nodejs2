const express = require("express");
const path = require("path");

const rootDir = require("../utils/rootDir");
const adminController = require('../controllers/admin');

const router = express.Router();


//using plain html

// router.get("/add-product", (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
// });

//using pug template
//get add product
router.get("/add-product",adminController.getAddProduct );

//
router.get("/products",adminController.getProducts);


//post add product
router.post("/add-product",adminController.postAddProduct );

//get edit product
router.get('/edit-product/:productId', adminController.getEditProduct)

// router.get('/prod', adminController.getAddProductApi);

module.exports = router;
