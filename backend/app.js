const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require("helmet");
const morgan = require('morgan')
const config = require('./config');
const userApi = require('./api/routes/user');
const taskApi = require('./api/routes/task');

require('dotenv').config()
const app = express();
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({extended: false}));
app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//-----SSL CONFIG-------
// app.use((req, res, next) => {
//    if(req.subdomains === 'www') {
//      res.redirect(301, `https://${req.headers.host}${req.url}`);
//    }
//    next();
// });

app.use('/api/user', userApi);
app.use('/api/task', taskApi);



app.use('/api/', function(req, res, next) {
    return res.status(200).json({
        message: "api/user for user info"
    });
});

app.use('/api', function (error, req, res, next) {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        message: error.message,
    });
});

app.use(function (error, req, res, next) {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        errorMessage: error.message,
        errorCode: statusCode
    });
});


module.exports = app;