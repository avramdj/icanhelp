const express = require('express');
const mongoose = require('mongoose');
const { User } = require('../../models/user');
const config = require('../../config')
const router = express.Router();

router.get('/', async (req, res, next) => {
    return res.status(200).json({
        message: "User api",
        documentation: {
            "/:id" : "get any user by ID",
            "/register": "expects body with name, last_name, br_licne_karte, " +
                        "username, password, jmbg, phone_number. 201 on success",
            "/login" : "expects username, password. 200 on success."
        }
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
    try{
        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            name: form.name,
            last_name: form.last_name,
            br_licne_karte: form.br_licne_karte,
            username: form.username,
            password: form.password,
            jmbg: form.jmbg,
            phone_number: form.phone_number
        })
        await newUser.save().catch(function(error){
            throw new Error("Greska pri registraciji")
        })
        return res.status(201).json({"message": "success"}); 
    } catch(error){
        next(error);
    }

})

router.post('/login', async (req, res, next) => {
    let form = req.body;
    const found = await User.findOne({"username": form.username, "password": form.password});
    if(found){
        return res.status(200).json({"message": "success", "user": found}); 
    } else {
        return res.status(404).json({"message": "failure"}); 
    }
})

module.exports = router;