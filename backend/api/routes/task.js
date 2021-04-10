const express = require('express');
const mongoose = require('mongoose');
const { Task } = require('../../models/task');
const { User } = require('../../models/user');
const config = require('../../config')
const router = express.Router();

router.get('/', async (req, res, next) => {
    return res.status(200).json({
        message: "Task api"
    });
})

/*
router.get('/:id', async (req, res, next) => {
    let { id: jmbg } = req.params;
    user = await User.findOne({ jmbg: jmbg })
    if(!user){
        error = new Error("user not found");
        error.status = 404;
        next(error);
    } else {
        return res.status(200).json({
            message: "Success",
            user_info: user
        });
    }
})
*/

router.post('/listTasks', async (req, res, next) => {

        const allTasks = await Task.find().exec();
        res.json(allTasks);
})

router.post('/new', async (req, res, next) => {
        try{
                const taskOwner = await User.findOne({"jmbg":req.body.jmbg}).exec();

                console.log(taskOwner);

                const newTask = new Task({
                        _id : new mongoose.Types.ObjectId(),
                        request_user_id: taskOwner._id,
                        task_string: req.body.task_string
                });

                await newTask.save();

                res.json({
                        status: "Saved",
                        info: newTask
                });
        }
        catch (error) {
                console.log(error);
                next(error);
        }
})

module.exports = router;

/*
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
        required: false
    },
    task_string: {
        type: String,
        required: true
    }
});
*/
