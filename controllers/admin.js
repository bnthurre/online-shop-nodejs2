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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title,imageUrl,price,description);
  product.save();
  res.redirect("/");
};
