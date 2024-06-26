const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient
let _db;
const mongoConnect =(callback)=>{
    MongoClient.connect("mongodb+srv://bnthurre:Bushra24@budget.ghiygmo.mongodb.net/?retryWrites=true&w=majority&appName=budget")
.then(client => {
    console.log("Connected")
    _db = client.db()
    callback(client)
    // throw Error;
}).catch(err => {
    console.log(err)
})

}
const getDb =()=>{
    if(_db){
        return _db;
    }
    throw "No database found"
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



























// //using sequalize
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-guide", "root", "admin", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports =sequelize;

//// using sql query
// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-guide',
//     password: 'admin'
// })

// module.exports = pool.promise();
