// Express
const express = require('express');
const app = express();

// Misc
const path = require('path');

// Dependancies & Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');

// DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.connect(/* ENTER MOGO CONNECTION */);



// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
// REQUIRE ROUTE 
const testRoute = require('./routes/externalRoute.js');

// Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Static Files
// STATIC FILE FOR DIST
app.use(express.static(path.join(__dirname, '../../dist/client')));

app.use('/test', testRoute);

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		message: `Sorry :) there seems to be an error: ${error.status} ${error.message}`
	});
});




app.listen(8888, () => {
	console.log('listening on 8888');
});