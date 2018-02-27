'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//const MONDEL_VARIABLE_NAME = require(PATH_TO_MODEL_FILE);

router.get('/test', function (req, res) {
	res.json({ message: "Get Request Received!" });
});

router.post('/', function (req, res) {});

router.put('/', function (req, res) {});

router.delete('/', function (req, res) {});

// Check if request has query in body
function queryExists(obj) {
	return Object.keys(obj).length > 0;
}

module.exports = router;