const { pool } = require('../configs/connectDB')
const bcrypt = require('bcryptjs')
const dateTime = require('../services/getDateTime')
const nodemailer = require('nodemailer');
const { registValitdation } = require('../validations/validate')

module.exports.createUser = async (req, res, next) => {

    const { error } = registValitdation(req.body)
    if (error) return res.json(error.details)

    const salt = await bcrypt.genSaltSync(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    try {
        await pool.execute(`insert into user(fullname, email, phone_number, address, password, role_id, created_at) values (?, ?, ?, ?, ?, ?, ?)`, [req.body.fullname, req.body.email, req.body.phone_number, req.body.address, hashPassword, 1, dateTime.getDateTime()])
        console.log('Create user successfull')
        return res.json({ thongbao: "Successfull" })
    }
    catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`);
        return res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
    next()
}

module.exports.mailer = (req) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: 'Shop name',
        to: req.body.email,
        subject: 'Sign Up Successfully',
        text: 'Welcome to our shop!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}