const { pool } = require('../configs/connectDB')
const dateTime = require('../services/getDateTime')
const bcrypt = require('bcryptjs')
// const users = [fullname, email, phone_number, address, password, role_id, created_at, updated_at, deleted]

module.exports.getByID = async (req, res) => {

    try {
        const [data] = await pool.execute('SELECT fullname, email, phone_number, address FROM user where id = ?', [req.params.id])
        console.log(`Load user(${req.params.id}) successfull`);
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports.changeUserInfo = async (req, res) => {
    try {
        await pool.execute('update user set fullname = ?, phone_number = ?, address = ? , updated_at = ? where id = ?', [req.body.fullname, req.body.phone_number, req.body.address, dateTime.getDateTime(), req.params.id])
        console.log(`Update user(${req.params.id}) successfull at ${dateTime.getDateTime()}`)
        res.json({ thongbao: "Successfull" });
    } catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`);
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}

module.exports.checkPassword = async (req, res, next) => {
    try {
        const [data] = await pool.execute('select password from user where id = ?', [req.params.id])
        console.log(data[0].password);
        if (bcrypt.compareSync(req.body.old_password, data[0].password)) {
            next()
        } else {
            res.json({ message: "Incorrect password!" })
        }

    } catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`);
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}

module.exports.changePassword = async (req, res) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(req.body.new_password, salt)
    try {
        await pool.execute('update user set password = ? where id = ?', [hashPassword, req.params.id])
        console.log(`Change password for user(${req.params.id}) successfull`)
        res.json({ thongbao: "Successfull" })
    } catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`);
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}