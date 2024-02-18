const Product = require("../models/productModel");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "add product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

//get admin products
exports.getProducts = (req, res, next) => {
    res.render("admin/products", {
      pageTitle: "admin products",
      path: "/admin/products",
    });
  };

//post add product

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};