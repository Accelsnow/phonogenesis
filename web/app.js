const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require('cookie-parser');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

const cors = require("cors");
app.use(cors({credentials: true, origin: true}));
app.use(
	session({
		secret: 'wow very secret',
		cookie: {
			maxAge: 600000
		},
		saveUninitialized: true,
		resave: false
	})
);


const usersRouter = require('./routes/users');
const groupRouter = require('./routes/groups');
const quizRouter = require('./routes/quiz');

app.use('/users', usersRouter);
app.use('/groups', groupRouter);
app.use('/quiz', quizRouter);

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});