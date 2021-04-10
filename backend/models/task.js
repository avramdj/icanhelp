const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    request_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    volunteer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    task_string: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', schema);

module.exports.Task = Task