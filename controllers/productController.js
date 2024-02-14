const products = [];
exports.getAddProduct=(req, res, next) => {
  res.render("add-product", {
    pageTitle: "add product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

//post add product

exports.postAddProduct=(req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

//get products
exports.getProducts=(req, res, next) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProduct: products.length > 0,
      activeShop:true,
      productCSS: true,
    });
  }