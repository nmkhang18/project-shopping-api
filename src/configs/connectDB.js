// get the client
const mysql = require('mysql2/promise')

console.log("Creating connection pool...");

module.exports.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shopping',
    // password: 'password'
})
