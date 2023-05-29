const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    role: {
        type: String,
        enum : ['customer','admin'],
        default: 'customer'
    },
    password: {type: String, required: true},
}, {timestamp: true})

const user = mongoose.model('user', userSchema)

module.exports = user;
  