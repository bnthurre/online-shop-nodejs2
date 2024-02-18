const Product = require("../models/productModel");


//get products
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "all products",
      path: "/products",
    });
  });
};

//get single product
exports.getProduct =(req,res,next)=>{
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect('/');
}

//get start page
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

//
exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
      pageTitle: "your cart",
      path: "/cart",
    });
};

//get orders
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "your orders",
    path: "/orders",
  });
};
//
exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
      pageTitle: "checkouts",
      path: "/checkout",
  });
};