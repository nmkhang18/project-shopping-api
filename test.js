const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const main = async () => {
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword1 = await bcrypt.hash('helloooasd', salt)
    const hashPassword2 = await bcrypt.hash('123', salt)

    let c = bcrypt.compareSync('123456', hashPassword1)

    let a = '$2a$10$LNENTKwEwQ2qMabqLd9pnutfOo1dQhEclSq.0xhaViX'

    console.log(hashPassword1.length)
    console.log(hashPassword2)
    console.log(bcrypt.compareSync('123', a))

}


// var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000 + 30) }, 'shhhhh');
// console.log(older_token);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NjQwMjA3NDMsImV4cCI6MTY2NDAyMDc3M30.2V9E4PeQlx5SD3f-cGPz4Z4sPQI6QrGd1uXjLdJ1Hh8'
const verified = jwt.verify(token, 'shhhhh')
console.log(verified);

