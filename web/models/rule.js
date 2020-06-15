'use strict';

const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
	templates: {
		type: [String],
		required: true,
		default: []
	},
	poi: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	ruleType: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	phoneme: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	ruleTxt: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	gloss: {
		type: [String],
		required: true,
		default: []
	},
	UR: {
		type: [String],
		required: true,
		default: []
	},
	SR: {
		type: [String],
		required: true,
		default: []
	}
});

const Rule = mongoose.model("Rule", RuleSchema);
module.exports = {RuleSchema, Rule};
