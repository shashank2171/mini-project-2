const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide a Name!"],
        unique: [false],
    },
    email:{
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true,"Email Exist"],
    },
    password:{
        type: String,
        required: [true, "Please provide a password!"],
        unique: [false],
    },
})

const model = mongoose.model.Users || mongoose.model("Users", UserSchema);
module.exports = model;
