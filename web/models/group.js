'use strict';

const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 1,
		unique: true,
		trim: true
	},
	students: {
		type: [String],
		required: true
	},
	owner: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

const Group = mongoose.model('Group', GroupSchema);
module.exports = {Group};
