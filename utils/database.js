//using sequalize
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-guide", "root", "admin", {
  dialect: "mysql",
  host: "localhost",
});

module.exports =sequelize;

//// using sql query
// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-guide',
//     password: 'admin'
// })

// module.exports = pool.promise();
