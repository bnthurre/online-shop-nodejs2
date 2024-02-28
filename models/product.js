//using sequelize
const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    AutoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// const db = require("../utils/database");
// const Cart = require("./cart");

// module.exports = class Product {
//   constructor(id, title, imageUrl, price, description) {
//     (this.id = id), (this.title = title);
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO products (title, price, description,imageurl) values(?,?,?,?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }
//   static deleteById() {}
//   static fetchAll() {
//     return db.execute("SELECT * FROM products");
//   }
//   static findById(id) {
//     return db.execute("SELECT * FROM products WHERE products.id = ?", [id])
//   }
// };
