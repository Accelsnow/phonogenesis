const axios = require('axios');
axios.defaults.withCredentials = true;

export const readCookie = (app) => {
	axios.get("https://accelsnow.com/users/check-session/").then(function (res) {
		if (res.data.currentUser) {
			app.setState({currentUser: res.data.currentUser});
		} else {
			app.setState({currentUser: null});
		}
	}).catch(err => {
		console.log(err);
	});
};

export const login = (page, username, password) => {
	axios.post("https://accelsnow.com/users/login", {
		username: username,
		password: password
	}).then(function (res) {
		if (res.data.result) {
			readCookie(page.props.app);
			page.setState({err: false});
		} else {
			page.setState({err: true});
		}
	}).catch(err => {
		console.log(err);
	});

};

export const logout = () => {
	const url = "https://accelsnow.com/users/logout";
	axios.get(url,).then(res => {

	}).catch(error => {
		console.log(error)
	})
};

export const getUsers = (page) => {
	axios.get("https://accelsnow.com/users").then(res => {
		page.setState({users: res.data.users});
	})
};

export const removeUser = (page, username) => {
	axios.delete(`https://accelsnow.com/users/${username}`).then(res => {
		getUsers(page);
	}).catch(err => {
		console.log(err);
	});
};

export const addUser = (page) => {
	if (!page.state.name || page.state.name.length < 1 ||
		!page.state.email || page.state.email.length < 1 ||
		!page.state.username || page.state.username.length < 1 ||
		!page.state.password || page.state.password.length < 1
	) {
		alert("All information must be completed!");
		return;
	}

	axios.post("https://accelsnow.com/users/", {
			name: page.state.name,
			type: page.state.type,
			email: page.state.email,
			username: page.state.username,
			password: page.state.password,
			groups: [],
			quizzes: []
		}
	).then(res => {
		if (res.data.result) {
			getUsers(page);
			page.setState({currEdit: -1, usernameError: ""});
			alert(`User ${page.state.username} successfully created.`);
		} else {
			alert("Failed to add user (username must be unique)!");
			page.setState({usernameError: "must be unique"});
		}
	}).catch(error => {
		console.log(error)
	});
};

export const deleteMessage = (app, username, msgid) => {
	axios.delete(`https://accelsnow.com/users/message/${username}/${msgid}`).then(res => {
		if (!res.data.user) {
			console.log("FAILED TO DELETE MESSAGE");
		} else {
			readCookie(app);
		}
	}).catch(err => {
		console.log(err);
	})
};

export const sendMessage = (app, username, message) => {
	axios.post("https://accelsnow.com/users/message", {message: message, username: username}).then(res => {
		if (!res.data.result) {
			console.log("FAILED TO SEND MESSAGE TO USER");
		} else {
			readCookie(app);
		}
	}).catch(err => {
		console.log(err);
	});
};


export const editUser = (page, username, info) => {
	axios.patch(`https://accelsnow.com/users/${username}`, info).then(res => {
		getUsers(page);
		sendMessage(page.props.app, username, "Your account information has been edited by an admin.");
	}).catch(err => {
		console.log(err);
	});
};
