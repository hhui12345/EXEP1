require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');
const connectDB = require('./dbs/database');

const app = express();

//init middleware
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());

//init db
connectDB();

//init routes

//handler error

module.exports = app;
