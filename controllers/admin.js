// const Product = require("../models/productModel");
const Product = require("../models/ProductMdl");


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
  const product = new Product(title, price, description, imageUrl)
  product.save()
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};



//get admin products
exports.getProducts = (req, res, next) => {
  // Product.findAll()
  // req.user.getProducts()
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "admin products",
        path: "/admin/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//get edit product
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  // req.user.getProducts({where: {id : prodId}})
  // Product.findByPk(prodId)
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "edit product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
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
  const product = new Product(updatedTitle, updatedPrice,  updatedDesc,updatedImageUrl, (prodId))
  product
    .save()
    .then((result) => {
      console.log("updated"); // Redirect to the /admin/products page
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });


};

// delete by Id
exports.postdeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
 Product.deleteById(prodId)
        .then((result) => {
          console.log("deleted");
          res.redirect("/admin/products");

        })
        .catch((err) => {
          console.log(err);
        });
};



// //using sequlaize

// // exports.postAddProduct = (req, res, next) => {
// //   const title = req.body.title;
// //   const imageUrl = req.body.imageUrl;
// //   const price = req.body.price;
// //   const description = req.body.description;

// //   Product.create({
// //     title: title,
// //     price: price,
// //     imageUrl: imageUrl,
// //     description: description,
// //     userId: req.user.id
// //   })
// //     .then((result) => {
// //       console.log(result);
// //       res.redirect("/admin/products");
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // };

// //get edit product
// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   req.user.getProducts({where: {id : prodId}})
//   // Product.findByPk(prodId)
//     .then((products) => {
//       const product = products[0]
//       if (!product) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "edit product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: product,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// //post edit product to the admin product page
// exports.postEditProduct = (req, res, next) => {
//   //fetch information for  the product and store new propprty
//   const prodId = req.body.productId; // this id is written from hidden inpt
//   const updatedTitle = req.body.title;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedPrice = req.body.price;
//   const updatedDesc = req.body.description;

//   Product.findByPk(prodId)
//     .then((product) => {
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.imageUrl = updatedImageUrl;
//       product.description = updatedDesc;
//       return product
//         .save()
//         .then((result) => {
//           console.log("updated"); // Redirect to the /admin/products page
//           res.redirect("/admin/products");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// //get admin products
// exports.getProducts = (req, res, next) => {
//   // Product.findAll()
//   req.user.getProducts()
//     .then((products) => {
//       res.render("admin/products", {
//         prods: products,
//         pageTitle: "admin products",
//         path: "/admin/products",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// //delete by Id
// exports.postdeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByPk(prodId)
//     .then((product) => {
//       return product
//         .destroy()
//         .then((result) => {
//           console.log("deleted");
//           res.redirect("/admin/products");

//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };























// //post add product using file
// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(null, title, imageUrl, description, price);
//   product.save();
//   res.redirect('/');
// };

// //post add product using sql query
// //post add product
// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Producta(null, title, imageUrl, price, description);
//   product
//     .save()
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

//using sql query

// //get admin products
// exports.getProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("admin/products", {
//       prods: products,
//       pageTitle: "admin products",
//       path: "/admin/products",
//     });
//   });
// };

// //get edit product
// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   Product.findByPk(prodId)
//     .then((product) => {
//       if (!product) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "edit product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: product,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

//post edit product to the admin product page
// exports.postEditProduct = (req, res, next) => {
//   //fetch information for  the product and store new propprty
//   const prodId = req.body.productId; // this id is written from hidden inpt
//   const updatedTitle = req.body.title;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedPrice = req.body.price;
//   const updatedDesc = req.body.description;

//   //store updated data to the model
//   const updatedProduct = new Product(
//     prodId,
//     updatedTitle,
//     updatedImageUrl,
//     updatedPrice,
//     updatedDesc
//   );
//   // call save function to save updated product
//   updatedProduct.save();

//   // Redirect to the /admin/products page
//   res.redirect("/admin/products");
// };

// //delete by Id
// exports.postdeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.deleteById(prodId);
//   res.redirect("/admin/products");
// };
