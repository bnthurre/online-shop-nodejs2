const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

class Cart {
  //fetch the previous cart
  static addProduct = (id, productPrice) => {
    let cart = { products: [], totalPrice:0 };
    fs.readFile(p, (err, filecontent)=>{
        if(!err){
            cart = JSON.parse(filecontent);
        }
        //analyze the cart => find the existing product
        const existingProductIndex =cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        // add new product or increase quantity
        if(existingProduct){
          updatedProduct = {...existingProduct}
          updatedProduct.qty = updatedProduct.qty +1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex]= updatedProduct;
        }
        else{
          updatedProduct = {id: id, qty: 1}
          cart.products = [...cart.products, updatedProduct]
        }
        cart.totalPrice = cart.totalPrice + +productPrice
        console.log(cart.totalPrice);
        fs.writeFile(p, JSON.stringify(cart), (err)=>{
          console.log(err);
        })
    })
  };
}
module.exports= Cart;