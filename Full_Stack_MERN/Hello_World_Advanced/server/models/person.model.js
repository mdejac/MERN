const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : [true, 'First name is required.'],
        minlength: [3, 'First name must be at least three characters long.']
    },
    lastName: {
        type: String,
        required : [true, 'Last name is required.'],
        minlength: [3, 'Last name must be at least three characters long.']
    }
}, {timestamps:true});

module.exports = mongoose.model('Person', PersonSchema);