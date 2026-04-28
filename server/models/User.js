const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    location: String
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel