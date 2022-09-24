const express = require('express')
const bodyParser = require('body-parser')
const db = require('./configs/connectDB')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
//Declare router
const userRouter = require('./routes/user.route')
const adminRouter = require('./routes/admin.route')
const registRouter = require('./routes/regist.route')
const productRouter = require('./routes/product.route')
const loginRouter = require('./routes/login.route')
//app & port
const app = express()
const port = process.env.PORT || 3000

app.use(cookieParser(process.env.SESSION_SECRET))

//Using cors
app.use(cors())
//config view engine
//
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//
//.env
//Config route
app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/regist', registRouter)
app.use('/product', productRouter)
app.use('/login', loginRouter)
//
app.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.json({ message: 'Successfull' })
})
//Start
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})