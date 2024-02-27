const Product = require("../models/productModel");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "add product",
    path: "/admin/add-product",
    editing: false,
  });
};

// exports.getAddProductApi = (req, res, next) => {
//   try {
//     Product.fetchAll((products) => {
//       res.json({
//         prods: products,
//         pageTitle: "admin products",
//         path: "/admin/products",
//       });
//     });
//   } catch (error) {

//   }
// };
//post add product
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};

//get edit product
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "edit product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product
    });
  });
};

//get admin products
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "admin products",
      path: "/admin/products",
    });
  });
};
