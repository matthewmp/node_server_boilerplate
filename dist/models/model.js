'use strict';

var mongoose = require('mongoose');

var VARIABLE_FOR_SCHEMA = mongoose.Schema({

	title: String,
	chef: String,
	updated: { type: Date, default: Date.now },
	region: String,
	ingredients: [String],
	instructions: [String]
}, { collection: 'recipes' });

module.exports = mongoose.model('Recipes', VARIABLE_FOR_SCHEMA);