const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        minlength: [3, 'Title must be at least three characters.']
    },
    price: {
        type: Number,
        min: [0.01, 'Value must be greater than $0.00.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minlength: [10, 'Description must be at least ten characters.']
    }
}, {timestamps:true});

module.exports = mongoose.model('Product', ProductSchema);