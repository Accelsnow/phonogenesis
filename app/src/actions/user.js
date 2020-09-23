const axios = require('axios');
axios.defaults.withCredentials = true;
const SERVER_URL = "http://127.0.0.1:5000"

export const readCookie = (app) => {
    axios.get(`${SERVER_URL}/user/check-session`).then(function (res) {
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
    axios.post(`${SERVER_URL}/user/login`, {
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
    const url = `${SERVER_URL}/user/logout`;
    axios.get(url,).then(() => {
        localStorage.clear();
    }).catch(error => {
        console.log(error);
    })
};

export const getUsers = (page) => {
    axios.get(`${SERVER_URL}/users`).then(res => {
        page.setState({users: res.data});
    }).catch(err => {
        console.log(err)
    })
};

export const removeUser = (page, username) => {
    axios.delete(`${SERVER_URL}/user/${username}`).then(res => {
        if (res.data.success) {
            getUsers(page);
        } else {
            alert(res.data.message);
        }
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

    axios.post(`${SERVER_URL}/user`, {
            name: page.state.name,
            type: page.state.type,
            email: page.state.email,
            username: page.state.username,
            password: page.state.password
        }
    ).then(res => {
        if (res.data.success) {
            page.setState({currEdit: -1, usernameError: ""});
            alert(`User ${page.state.username} successfully created.`);
            if (page.props.app.state.currentUser) {
                getUsers(page);
            } else {
                page.props.history.push('/login');
            }
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        if (err.status === 401) {
            alert("You need admin privilege to create a user of this type!")
        } else {
            console.log(err)
        }
    });
};

export const deleteMessage = (app, username, msgid) => {
    axios.delete(`${SERVER_URL}/message/${msgid}`).then(res => {
        if (res.data.success) {
            readCookie(app);
        } else {
            alert(res.data.message)
        }
    }).catch(err => {
        if (err.status === 401) {
            alert("You do not have permission for deleting this message.");
        } else {
            console.log(err);
        }
    })
};

export const sendMessage = (app, username, message, silent) => {
    axios.post(`${SERVER_URL}/message/${username}`, {message: message}).then(res => {
        if (res.data.success) {
            readCookie(app);
            if (!silent) {
                alert("Message sent!");
            }
        } else {
            alert(res.data.message)
        }
    }).catch(err => {
        console.log(err);
    });
};


export const editUser = (page, username, info) => {
    axios.patch(`${SERVER_URL}/user`, info).then(res => {
        if (res.data.success) {
            getUsers(page);
            sendMessage(page.props.app, username, "Your account information was edited by an admin.", true);
            alert("User information updated!");
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        console.log(err);
    });
};
