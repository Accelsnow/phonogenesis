const mongoose = require('mongoose');
const {User} = require("../models/user");
const {Rule} = require('../models/rule');
const {Group} = require("../models/group");
const log = console.log;
const {ruleList} = require('./default_rule');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/PhonogenesisDB';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;

db.once('open', function () {
	log("DB connection successful!");

	const defaultAdmin = new User({
		type: "admin",
		name: "admin_name",
		email: "admin@pg.com",
		username: "admin",
		password: "admin",
		groups: [],
		quizzes: []
	});
	defaultAdmin.save().then(function (result) {
		log("added default admin");
	}, function (error) {
		log("default admin exists");
	});

	const defaultStudent = new User({
		type: "student",
		name: "student_user",
		email: "stu@pg.com",
		username: "user",
		password: "user",
		groups: ["CSC309"],
		messages: [],
		quizzes: []
	});
	defaultStudent.save().then(function (result) {
		log("added default student");
	}, function (error) {
		log("default student exists");
	});

	const defaultProf = new User({
		type: "professor",
		name: "professor_user",
		email: "prof@pg.com",
		username: "user2",
		password: "user2",
		groups: ["CSC309"],
		messages: [],
		quizzes: []
	});
	defaultProf.save().then(function (result) {
		log("added default prof");
	}, function (error) {
		log("default prof exists");
	});

	const defaultGroup = new Group({
		name: "CSC309",
		students: ["user"],
		owner: "user2"
	});
	defaultGroup.save().then(function (result) {
		log("added default group");
	}, function (err) {
		log("default group exists");
	});

	ruleList.map(rawRule => {
		const rule = new Rule({
			templates: rawRule.templates,
			poi: rawRule.poi,
			ruleType: rawRule.ruleType,
			phoneme: rawRule.phoneme,
			ruleTxt: rawRule.ruleTxt,
			gloss: rawRule.gloss,
			UR: rawRule.UR,
			SR: rawRule.SR
		});

		rule.save().then(result => {
			log("rule data saved");
		}).catch(err => {
			log("rule data existed");
		});
	});

});

module.exports = {mongoose};
