let mongo = require('../mongodb');
let { ObjectId } = require('mongodb');
let COLLECTION_NAME = "employeeTest"

exports.create = async (data) => {
    let response = await mongo?.db?.collection(COLLECTION_NAME)?.insertOne(
        {
            ...data,
            ...{ createdDate: new Date().getTime() }
        })
    let employeeId = response.insertedId.toString()
    return { _id: employeeId }
}

exports.getById = async (id) => {
    return (await mongo?.db?.collection(COLLECTION_NAME)?.aggregate([
        {
            $match: { _id: new ObjectId(id) }
        },
        {
            $project: {
                "_id": 1,
                "firstName": 1,
                "lastName": 1,
                "phoneNumber": 1,
                "email": 1,
                "role": 1,
                "createdDate": 1
            }
        }
    ]).toArray())[0]

}


exports.update = async (id, data) => {
    let inputId = new ObjectId(id)
    data._id = inputId
    let d = await mongo?.db?.collection(COLLECTION_NAME)?.updateOne(
        { _id: inputId },
        {
            $set: {
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role,
                phoneNumber: data.phoneNumber,
                email: data.email,
            }
        }, { upsert: true })
    return d
}

exports.deleteEmployee = async(id)=>{
    return await mongo?.db?.collection(COLLECTION_NAME).deleteOne({_id:new ObjectId(id)});
}