const express = require('express');
const mongoose = require('mongoose');
const { User } = require('../../models/user');
const config = require('../../config')
const router = express.Router();

router.get('/', async (req, res, next) => {
    return res.status(200).json({
        message: "User api"
    });
})

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

router.post('/register', async (req, res, next) => {
    let form = req.body;
    try {
        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            name: form.name,
            last_name: form.last_name,
            jmbg: form.jmbg,
            br_licne_karte: form.br_licne_karte,
            phone_number: form.phone_number
        })
        newUser.save();
        return res.status(201).json({"message": "success"}); 
    } catch (error){
        next(error)
    }
})

module.exports = router;