const { pool } = require('../configs/connectDB')
const bcrypt = require('bcryptjs')
const { loginValitdation } = require('../validations/validate')
const jwt = require('jsonwebtoken')

module.exports.login = async (req, res) => {

    const { error } = loginValitdation(req.body)
    if (error) return res.json(error.details)


    try {
        const [data] = await pool.execute('SELECT id, password, role_id FROM user where email = ?', [req.body.email])
        console.log(`Load successfull`);
        if (data.length === 0) return res.json({ message: 'Email does not exist' })
        if (!bcrypt.compareSync(req.body.password, data[0].password)) return res.json({ message: 'Wrong password' })

        const token = jwt.sign({ _id: data[0].id, exp: Math.floor(Date.now() / 1000 + (60 * 5)) }, process.env.TOKEN_SECRET)

        return res.cookie('token', token, { signed: true }).header('auth_token', token).json({ message: 'Logged in' });
    }
    catch (error) {
        console.log(error);
    }
}