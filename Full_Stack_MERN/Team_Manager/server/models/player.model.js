const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "Name is required"],
        minlength : [2, "Name must be at least two characters."]
    },
    perferredPosition: {
        type: String
    },
    gamesStatus : [{
        game: {
            type: Number,
            required: [true, "Game number is required"],
            min:[1, "Game number must be greater than zero"]
            
        },
        status: {
            type: String,
            enum: {
                values: ['Playing', 'Not Playing', 'Undecided'],
                message: 'Status must be "Playing", "Not Playing", or "Undecided".'
            },
            required: [true, "Game status is required."]
        },
        _id: false

    }]
}, {timestamps:true, validateBeforeSave:true});


module.exports = mongoose.model('Player', PlayerSchema);