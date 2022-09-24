const { pool } = require('../configs/connectDB')

module.exports.insertRole = async (data) => {
    await pool.execute('insert into role(name) values (?)', [data.name]);
    console.log('Success')
}

module.exports.updateRole = async (data) => {
    await pool.execute('update into role(name) values (?)', [req.body.name]);
}