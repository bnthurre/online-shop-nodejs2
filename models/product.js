const db = require("../utils/database");
const Cart = require('./cart')

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    (this.id = id), (this.title = title);
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {}
  static deleteById() {}
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static findById() {}
};