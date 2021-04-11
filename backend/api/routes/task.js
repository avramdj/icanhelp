const express = require('express');
const mongoose = require('mongoose');
const { Task, DeletedTask } = require('../../models/task');
const { User } = require('../../models/user');
const config = require('../../config')
const router = express.Router();

router.get('/', async (req, res, next) => {
    return res.status(200).json({
        ok: true,
        message: "Task api",
   });
})

router.get('/docs', async(req,res,next) => {
        res.send(`              Task:

                        /api/task/docs Dokumentacija

                        /api/task/listTasks returns [Task]
                        
                        Vraca niz svih taskova.
                        
                        /api/task/new requires { “jmbg” : String, “task_string” : String, “latitude” : Number/String, “longitude” : Number/String }
                        
                        Pravi novi task
                        
                        /api/task/assign/:id1/:id2 requires :id1 = JMBG1, :id2 = JMBG2
                        
                        Stavlja korisnika JMBG1 na task korisnika JMBG2 ukoliko postoji
                        
                        /api/task/listFreeTasks returns [Task]
                        
                        Vraca niz svih taskova koji *nisu* dodeljeni volonteru
                        
                        /api/task/delete/:id requires :id = JMBG
                        
                        Brise task korisnika sa JMBG-om :id
                        
                        /api/task/listNearestTasks/:lat/:long requires :lat = Number, :long = Number
                        
                        Vraca niz [Task] najblizih taskova prosledjenim parametrima
`);
});

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

router.get('/listTasks', async (req, res, next) => {

        const allTasks = await Task.find()
                .populate('request_user_id')
                .populate('volunteer_id')
                .exec();
        res.json(allTasks);
})

router.get('/listFreeTasks', async (req,res,next) => {

        const freeTasks = await Task.find({'volunteer_id' : {$exists:false}})
                .populate('request_user_id')
                .populate('volunteer_id')
                .exec();

        res.json(freeTasks);
});

router.get('/listNearestTasks/:lat/:long', async (req,res,next) => {

        try{
                let freeTasks = await Task.find({'volunteer_id' : {$exists:false}})
                        .populate('request_user_id')
                        .populate('volunteer_id')
                        .exec();

                const objInfo = {
                        "latitude" : parseFloat(req.params.lat),
                        "longitude" : parseFloat(req.params.long)
                }

                function distance(a,b) {
                        return Math.sqrt((a.longitude-b.longitude)**2 + (a.latitude-b.latitude)**2);
                }

                res.json(freeTasks.sort((a,b) => {
                        return distance(objInfo,a) > distance(objInfo,b);
                }));
        }
        catch (error) {
                next(error);
        }
});

//router.post('/listActiveTasks',async (req,rex,next) => {
//});

router.get('/unassign/:id', async (req,res,next) => {

        try {
                const foundUser = await User.findOne({"jmbg" : req.params.id}).exec(); 

                if(foundUser == null) {
                        throw new Error("User not found!");
                }

                await Task.updateOne({"volunteer_id" : foundUser._id}, {$unset : { "volunteer_id" : ""}}).exec();
        }
        catch (error) {
                next(error);
        }

});

router.get('/assign/:id1/:id2',async (req,res,next) => {

        // Assign volunteer with id1 to requester with id2

        try {

                if(req.params.id1 == req.params.id2) {
                        throw new Error("Cannot volunteer for own task!");
                }

                const jmbg1 = req.params.id1;
                const jmbg2 = req.params.id2;

                const user1 = await User.findOne({'jmbg':jmbg1}).exec();
                const user2 = await User.findOne({'jmbg':jmbg2}).exec();

                if(user1 == null || user2 == null) {
                        throw new Error("Failed to find user!");
                }

                const task = await Task.findOne({'request_user_id' : user2._id}).exec();

                if(task == null) {
                        throw new Error("Task not found!");
                }

                if(task.volunteer_id != null) {
                        throw new Error("Task already assigned!");
                }

                await task.updateOne({"volunteer_id": user1._id,"task_assign_date": Date.now()}).exec().catch(function(err) {
                        throw err;
                });

                res.status(201).json({
                        message: "Added volunteer to task",
                        ok: true,
                        info: [user1,user2,task]
                });

        }
        catch (error) {
                next(error);
        }
});

router.post('/new', async (req, res, next) => {

        try{
                const taskOwner = await User.findOne({"jmbg":req.body.jmbg}).exec();

                if(taskOwner == null) {
                        throw new Error("User not found!");
                }

                const foundTask = await Task.findOne({"request_user_id" : taskOwner._id }).exec();

                if(foundTask != null) {
                        throw new Error("User already requested a task!");
                }

                const newTask = new Task({
                        _id : new mongoose.Types.ObjectId(),
                        request_user_id: taskOwner._id,
                        task_string: req.body.task_string,
                        latitude: parseFloat(req.body.latitude),
                        longitude: parseFloat(req.body.longitude),
                        task_creation_date: Date.now()
                });

                await newTask.save().catch(function(err) {
                        throw err;
                });

                res.status(201).json({
                        status: "Success",
                        ok: true,
                        saved: newTask
                });
        }
        catch (error) {
                console.log(error);
                next(error);
        }
})

router.get('/delete/:id',async (req,res,next) => {

        try{
                const taskOwner = await User.findOne({"jmbg":req.params.id}).exec();

                if(taskOwner == null) {
                        throw new Error("Task owner not found!");
                }

                const taskFound = await Task.findOne({"request_user_id" : taskOwner._id}).exec();

                if(taskFound == null) {
                        throw new Error("Task not found!");
                }

                taskFound.task_deletion_date = Date.now();

                let swap = new DeletedTask(taskFound.toJSON());

                await taskFound.remove();

                // Move to deleted tasks
                // await swap.save().catch((error) => {
                //         throw error;
                // });

                res.status(200).json({
                        message: "Task deleted",
                        ok: true,
                        task: taskFound
                });
        }
        catch(error) {
                console.log(error)
                next(error);
        }
});

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
