const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-guide',
    password: 'admin'
})

module.exports = pool.promise();