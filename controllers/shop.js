const Product = require("../models/productModel");
const Cart  = require('../models/cart');
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
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-details", {
      pageTitle: "product details",
      product: product,
      path: '/products'
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
    });
  });
};

//

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};
//post cart 
exports.postCart= (req,res,next)=>{
  const prodId = req.body.productId;
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price);
  })
  res.redirect('/cart');
}

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
