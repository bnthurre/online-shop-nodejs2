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

module.exports = router;
