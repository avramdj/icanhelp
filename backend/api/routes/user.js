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

module.exports = router;