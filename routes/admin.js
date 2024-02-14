const express = require("express");
const path = require("path");

const rootDir = require("../utils/rootDir");

const router = express.Router();

const products = [];

//using plain html

// router.get("/add-product", (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
// });

//using pug template
router.get("/add-product", (req, res, next) => {
  res.render('add-product',{pageTitle: 'add product'})
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
