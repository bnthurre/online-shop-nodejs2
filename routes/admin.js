const express = require("express");
const path = require("path");

const rootDir = require("../utils/rootDir");
const productController = require('../controllers/productController');

const router = express.Router();


//using plain html

// router.get("/add-product", (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
// });

//using pug template
router.get("/add-product",productController.getAddProduct );

router.post("/add-product",productController.postAddProduct );

module.exports = router;
