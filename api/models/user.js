'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {QuizSchema} = require('./quiz.js');

const MessageSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	timeStamp: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});


const UserSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	username: {
		type: String,
		required: true,
		minlength: 1,
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	messages: {
		type: [MessageSchema],
		default: []
	},
	groups: {
		type: [String],
		default: []
	},
	quizzes: {
		type: [QuizSchema],
		default: []
	}
});

UserSchema.pre('save', function (next) {
	const user = this;

	if (user.isModified('password')) {
		bcrypt.hash(user.password, 10).then(function (hash) {
			user.password = hash;
			next();
		});
	} else {
		next();
	}

});

UserSchema.statics.findByUsernamePassword = function (username, password) {
	const User = this;
	return User.findOne({username: username}).then(user => {
		if (!user) {
			return Promise.reject();
		}

		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user);
				} else {
					reject();
				}
			})
		})
	})
};

const User = mongoose.model('User', UserSchema);

module.exports = {User};
