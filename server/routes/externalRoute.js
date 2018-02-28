const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//const MONDEL_VARIABLE_NAME = require(PATH_TO_MODEL_FILE);

router.get('/', (req, res)=>{
	console.log('inside test route');
	res.json({message: "Get Request Received!"});
});

router.post('/', (req, res)=>{
	
});

router.put('/', (req, res)=>{
	
});

router.delete('/', (req, res)=>{
	
});


// Check if request has query in body
function queryExists(obj) {
	return Object.keys(obj).length > 0;	
}

module.exports = router;