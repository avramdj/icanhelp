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

router.post('/listFreeTasks', async (req,res,next) => {

        const freeTasks = await Task.find({'volunteer_id' : {$exists:false}}).exec();

        res.json(freeTasks);
});

//router.post('/listActiveTasks',async (req,rex,next) => {
//});

router.post('/assign/:id1/:id2',async (req,res,next) => {

        // Assign volunteer with id1 to requester with id2

        const jmbg1 = req.params.id1;
        const jmbg2 = req.params.id2;

        const user1 = await User.findOne({'jmbg':jmbg1}).exec();
        const user2 = await User.findOne({'jmbg':jmbg2}).exec();

        if(user1 == null || user2 == null) {
                res.status(404).json({
                        message: "Failed to find user!"
                });
        }

        const task = await Task.findOne({'request_user_id' : user2._id}).exec();

        if(task == null) {
                res.status(404).json({
                        message: "Task not found!"
                });
        }

        await task.updateOne({"volunteer_id": user1._id}).exec().catch(function(err) {
                next(err);
        });

        res.status(201).json({
                message: "Added volunteer to task",
                info: [user1,user2,task]
        });;
});

router.post('/new', async (req, res, next) => {

        try{
                const taskOwner = await User.findOne({"jmbg":req.body.jmbg}).exec();

                console.log(taskOwner);

                const newTask = new Task({
                        _id : new mongoose.Types.ObjectId(),
                        request_user_id: taskOwner._id,
                        task_string: req.body.task_string,
                        latitude: parseFloat(req.body.latitude),
                        longitude: parseFloat(req.body.longitude)
                });

                await newTask.save();

                res.status(201).json({
                        status: "Success",
                        saved: newTask
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
