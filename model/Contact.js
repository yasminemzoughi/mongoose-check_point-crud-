//1 require mongoose
const mongoose = require ("mongoose")

//create schema
const schema = mongoose.Schema

//create model
const contactSchema = new schema ({
    name: {type: String , required: true},
    email: {type: String, required:  true}, 
    phone: {type:Number}
}) 

module.exports = Contact =mongoose.model("contact", contactSchema)