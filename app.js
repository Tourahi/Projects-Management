"use strict";

const bodyParser        = require('body-parser');
const express   = require('express');
const session   = require('express-session');
const mongoose          = require('mongoose');
const methodOverride    = require('method-override');
const flash             = require('connect-flash');
const MongoStore        = require('connect-mongo')(session);

// Dev
const morgan = require('morgan');

//Database related
const connectDB = require('./config/db');

// app
const app = express();
const PORT = process.env.PORT || 8000;

// parser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



//Initialize app
require('./init')(app,session,MongoStore,mongoose,
    flash,express,morgan);

// connect to mongoDB Database
connectDB();


// Routes
app.use('/projects',require('./routes/projects'));


// booting the server
const server = app.listen(
    PORT,
    console.log(`Server is running on port ${PORT}.`)
);
