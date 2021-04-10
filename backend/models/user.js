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
    },
    id_photo_route: {
        type: String,
        required: false
    },
    ver_photo_route: {
        type: String,
        required: false
    },
    phone_number: {
        type: String,
        required: false
    }
});

const User = mongoose.model('User', schema);

module.exports.User = User