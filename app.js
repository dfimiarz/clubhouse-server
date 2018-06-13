const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const memberRoutes = require('./api/routes/members');
const guestRoutes = require('./api/routes/guests');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());



//Routes for handeling API calls
app.use('/members', memberRoutes);
app.use('/guests', guestRoutes);

app.use( (req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use( (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})



module.exports = app;