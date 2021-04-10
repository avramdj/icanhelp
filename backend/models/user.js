const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    jmbg: {
        type: String,
        required: true,
        unique: true
    },
    br_licne_karte: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
        required: false,
        unique: true
    }
});

const User = mongoose.model('User', schema);

module.exports.User = User