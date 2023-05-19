const mongoose = require('mongoose');
const bcrypt = require('brcypt');
const {isEMail} = require('validator');
 
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minlength: [2, "First name must be at least two characters long."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minlength: [2, "Last name must be at least two characters long."]
    },
    birthday: {
        type: Date,
        required: [true, "Birthday is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email address already registered."],
        validate: [isEMail, "Please enter a valid email."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least eight characters long."]
    }
});
 
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((data) => this._confirmPassword = data);

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password.')
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


module.exports = mongoose.model('User', UserSchema);