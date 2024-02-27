
const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);
getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};
module.exports = class Product {
  constructor(id,title, imageUrl, price ,description) {
    this.id =id,
    this.title = title;
    this.imageUrl = imageUrl;
    this.price =price;
    this.description =description;
  }

  save() {
    getProductFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById (id){
    getProductFromFile(products =>{
      //filter my products and if id is not equal to id im looking for
      //then write all products to the file
    const updatedProduct = products.filter(prod => prod.id !== id)
      fs.writeFile(p, JSON.stringify(updatedProduct), (err)=>{
        if(!err){

        }
      })
      
    })

  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
  static findById (id,cb){
    getProductFromFile(products =>{
      const product = products.find(p => p.id === id);
      cb(product);
    })

  }
};

