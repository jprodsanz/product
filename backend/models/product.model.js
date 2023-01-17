const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    username: String,
    product: String,
    price: Number,
    description: String
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema)