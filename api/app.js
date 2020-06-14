const express = require("express");
const app = express();

const createError = require('http-errors');
const path = require('path');

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('trust proxy', true);
const cors = require("cors");
app.use(cors({credentials: true, origin: true}));
app.use(
	session({
		secret: "oursecret",
		resave: true,
		saveUninitialized: true,
		cookie: {
			path: "/",
			expires: 60000,
			httpOnly: false
		}
	})
);


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const usersRouter = require('./routes/users');
const groupRouter = require('./routes/groups');
const quizRouter = require('./routes/quiz');

app.use('/users', usersRouter);
app.use('/groups', groupRouter);
app.use('/quiz', quizRouter);

app.use(express.static(__dirname + "/client/build"));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});