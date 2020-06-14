"use strict";
const mongoose = require('mongoose');
const {RuleSchema} = require('./rule');

const PastResultSchema = new mongoose.Schema({
	score: {
		type: Number,
		required: true
	},
	answers: {
		type: [String],
		required: true
	},
	timeStamp: {
		type: String,
		required: true,
		trim: true
	}
});

const QuestionSchema = new mongoose.Schema({
	rule: RuleSchema,
	size: {
		type: Number,
		required: true,
		default: 20
	},
	canUR: {
		type: Boolean,
		required: true
	},
	canPhoneme: {
		type: Boolean,
		required: true
	},
	maxCADT: {
		type: Number,
		required: true
	}
});

const QuizSchema = new mongoose.Schema({
	timeLim: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 1
	},
	owner: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	pastResult: {
		type: PastResultSchema,
		default: null
	},
	questions: {
		type: [QuestionSchema],
		default: []
	},
	group: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

QuizSchema.statics.findByUsernamePassword = function (quizNameList) {
	const Quiz = this;

	Quiz.find({name: {$in: quizNameList}}).then(res => {
		return res;
	}).catch(err => {
		console.log(err);
		return [];
	});
};

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = {Quiz, QuizSchema};