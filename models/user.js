const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { type: String, index: true },
    address: String,
    mobile: String,
    email: String,
    password: String,
    userName: { type: String, unique: true },
}, { timestamps: true });


module.exports = mongoose.model('user', userSchema);