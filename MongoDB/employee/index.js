const Joi = require('@hapi/joi')
const repo = require('./repo')

const schema = Joi.object({
    _id: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    businessId: Joi.string(),
    email: Joi.string(),
    phoneNumber: Joi.string(),
    role: Joi.string(),
})

exports.create = async (data, res) => {
    schema.validate(data)
    const response = await repo.create(data)
    return res.json(response)
}

exports.get = async (id,res) => {
    const response = await repo.getById(id)
    return res.json(response)
}


exports.update = async (id, data,res) => {
    schema.validate(data)
    const response = await repo.update(id, data)
    return res.json(response)
}

exports.deleteEmployee = async (id,res) => {
    const response = await repo.deleteEmployee(id)
    return res.json(response)
}