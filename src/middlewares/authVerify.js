const jwt = require('jsonwebtoken')

module.exports.auth = (req, res, next) => {
    const token = req.signedCookies.token
    if (!token) return res.json({ message: 'Access denied' })

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(verified);
        req.user = verified
        next()
    } catch (error) {
        console.log(error.name);
        return res.json({ message: error.name })
    }
}

module.exports.checkId = (req, res, next) => {
    if (req.params.id != req.user._id) return res.json({ message: 'You are not this user' })
    next()
}
