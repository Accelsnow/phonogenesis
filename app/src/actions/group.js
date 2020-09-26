import {readCookie, sendMessage, SERVER_URL} from "./user";

const axios = require('axios');
axios.defaults.withCredentials = true;

export const getGroupNames = (page) => {
    axios.get(`${SERVER_URL}/groups`).then(res => {
        if (res.data) {
            page.setState({groups: res.data.map(group => group.name)});
        } else {
            console.log("NO GROUP DATA");
        }
    }).catch(err => {
        console.log(err);
    })
};

export const removeGroup = (page, group) => {
    axios.delete(`${SERVER_URL}/group/${group.id}`).then(res => {
        if (res.data.success) {
            res.data.students.forEach(stu => {
                sendMessage(page.props.app, stu.username,
                    `Professor ${page.props.app.state.currentUser.username} has disassembled group ${group.name}.`, true);
            });
            alert("Group disassembled.");
            readCookie(page.props.app);
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        console.log(err);
    });
};

export const addGroup = (page, name) => {
    const owner = page.props.app.state.currentUser;
    let reg = /^[0-9a-zA-Z]+[-]?[0-9a-zA-Z]+$/;

    if (!reg.test(name)) {
        alert("Group must be alphanumeric strings with an optional - in the middle!");
        page.setState({err: true});
    } else {
        axios.post(`${SERVER_URL}/group`, {
                name: name,
                ownerid: owner.id
            }
        ).then(res => {
            if (res.data.success) {
                readCookie(page.props.app);
                alert("Group created!");
                page.setState({err: false});
            } else {
                alert(res.data.message);
                page.setState({err: true});
            }
        }).catch(error => {
            console.log(error)
        });
    }
};

export const addToGroup = (page, username, group) => {
    axios.post(`${SERVER_URL}/group/user`, {
        username: username,
        groupid: group.id
    }).then(res => {
        if (res.data.success) {
            readCookie(page.props.app);
            alert(`Student ${username} Added to group ${group.name}!`);
            sendMessage(page.props.app, username, `You have been added to group ${group.name} by professor 
			${page.props.app.state.currentUser.name}(${page.props.app.state.currentUser.username})`, true);
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        console.log(err);
    });
};

export const removeFromGroup = (page, user, group) => {
    axios.patch(`${SERVER_URL}/group/user`, {
        userid: user.id,
        groupid: group.id
    }).then(res => {
        if (res.data.success) {
            if (page.props.app.state.currentUser.type === "student") {
                alert(`You have dropped from group ${group.name}!`);
                sendMessage(page.props.app, group.owner.username,
                    `Student ${user.username} has dropped from group ${group.name}!`, true);
            } else {
                alert(`Student ${user.username} is removed from group ${group.name}!`);
                sendMessage(page.props.app, user.username, `You have been removed from group ${group.groupName} 
				by professor ${page.props.app.state.currentUser.name}(${page.props.app.state.currentUser.username})`, true);
            }
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        console.log(err);
    });
};

export const broadcastMessage = (app, groupName, message, silent) => {
    axios.post(`${SERVER_URL}/group/message`, {groupName: groupName, message: message}).then(res => {
        if (res.data.success) {
            readCookie(app);
            if (!silent) {
                alert("Message broadcast succeeded!");
            }
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        console.log(err);
    });
};