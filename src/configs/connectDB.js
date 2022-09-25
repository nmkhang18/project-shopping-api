// get the client
const { provider } = require('@hapi/joi/lib/cache');
const mysql = require('mysql2/promise')
require('dotenv').config()


console.log("Creating connection pool...");

module.exports.pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})
