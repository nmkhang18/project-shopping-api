const Joi = require('joi')

module.exports.registValitdation = (data) => {

    const schema = Joi.object({
        fullname: Joi.string().min(6).required(),
        email: Joi.string().min(6).email().required(),
        phone_number: Joi.string().pattern(/^[0-9]+$/, 'numbers').required(),
        address: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        role_id: Joi.number(),
    })

    return schema.validate(data)
}

module.exports.loginValitdation = (data) => {

    const schema = Joi.object({
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required(),
    })

    return schema.validate(data)
}