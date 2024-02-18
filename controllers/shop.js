const Product = require("../models/productModel");


//get products
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "all products",
      path: "/products",
      hasProduct: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

//get start page
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProduct: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

//
exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
      pageTitle: "your cart",
      path: "/",
    });
};
//
exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
      pageTitle: "checkouts",
      path: "/checkout",
  });
};