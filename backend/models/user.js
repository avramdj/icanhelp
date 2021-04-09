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
    jmbg: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', schema);

module.exports.User = User