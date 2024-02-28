const Product = require("../models/product");
const Cart = require("../models/cart");

//get products
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fileData]) => {
      res.render("shop/product-list", {
        prods: rows,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//get single product
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([product]) => {
      res.render("shop/product-details", {
        pageTitle: "product details",
        product: product[0],
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//get start page
exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fileData]) => {
      res.render("shop/index", {
        prods: rows,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      console.log("in the shop controller", cartProducts);
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};
//post cart
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

//dlete cart
exports.postDeleteCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product?.price);
    res.redirect("/cart");
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

// //get all products using file
// exports.getProducts = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/product-list', {
//       prods: products,
//       pageTitle: 'All Products',
//       path: '/products'
//     });
//   });
// };

// exports.getIndex = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/index', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/'
//     });
//   });
// };

// //get one product by id using file sytem
// //get single product
// exports.getProduct = (req, res, next) => {
//   const prodId = req.params.productId;
//   Product.findById(prodId, (product) => {
//     res.render("shop/product-details", {
//       pageTitle: "product details",
//       product: product,
//       path: "/products",
//     });
//   });
// };
