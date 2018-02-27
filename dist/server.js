'use strict';

// Express
var express = require('express');
var app = express();

// Misc
var path = require('path');

// Dependancies & Middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');

// DB
var mongoose = require('mongoose');
//mongoose.connect(/* ENTER MOGO CONNECTION */);


// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// REQUIRE ROUTE 
var testRoute = require('./routes/externalRoute.js');

// Cors
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Static Files
app.use(express.static(path.join(__dirname, '../../dist/client')));

app.use('/test', testRoute);

app.use(function (req, res, next) {
	var error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use(function (error, req, res, next) {
	res.status(error.status || 500);
	res.json({
		message: 'Sorry :) there seems to be an error: ' + error.status + ' ' + error.message
	});
});

app.listen(8888, function () {
	console.log('listening on 8888');
});