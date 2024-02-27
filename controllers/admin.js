const Product = require("../models/productModel");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "add product",
    path: "/admin/add-product",
    editing: false,
  });
};



//post add product
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, price, description);
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

//post edit product to the admin product page
exports.postEditProduct = (req, res, next) => {
  //fetch information for  the product and store new propprty
  const prodId = req.body.productId; // this id is written from hidden inpt
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;

  //store updated data to the model
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedPrice,
    updatedDesc
  );
  // call save function to save updated product
  updatedProduct.save();

    // Redirect to the /admin/products page
  res.redirect('/admin/products');
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


//delete by Id
exports.postdeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect("/admin/products");
};