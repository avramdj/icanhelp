const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    request_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        required: true
    },
    volunteer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    task_string: {
        type: String,
        required: true
    },
    latitude: {
            type: Number,
            required: true,
    },
    longitude: {
            type: Number,
            required: true
    },
    task_assign_date: {
            type: Date,
            default: null,
            required: false
    },
    task_creation_date: {
            type: Date,
            required: true
    },
    task_deletion_date: {
            type: Date,
            required: false
    }
});

const Task = mongoose.model('Task', schema);
const DeletedTask = mongoose.model('DeletedTask', schema);

module.exports.Task = Task
module.exports.DeletedTask = DeletedTask
