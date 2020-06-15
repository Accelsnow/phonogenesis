import {readCookie, sendMessage} from "./user";

const axios = require('axios');
axios.defaults.withCredentials = true;

export const getGroupUserList = (page, username) => {
	axios.get(`https://accelsnow.com/groups/objectify/${username}`).then(res => {
		const groupToUser = res.data;
		if (groupToUser === null || groupToUser === undefined) {
			console.log("NO G2U RESPONDED");
		} else {
			page.setState({g2u: groupToUser});
		}
	}).catch(err => {
		console.log(err);
	});

};

export const getGroupNames = (page) => {
	axios.get("https://accelsnow.com/groups").then(res => {
		if (res.data) {
			page.setState({groups: res.data.map(group => group.name)});
		} else {
			console.log("NO GROUP DATA");
		}
	}).catch(err => {
		console.log(err);
	})
};

export const removeGroup = (page, name) => {
	axios.delete(`https://accelsnow.com/groups/${name}`).then(res => {
		if (res.data.result) {
			getGroupUserList(page, page.props.app.state.currentUser.username);
			res.data.students.forEach(stu => {
				sendMessage(page.props.app, stu,
					`Professor ${page.props.app.state.currentUser.username} has disassembled group ${name}.`);
			});
		} else {
			console.log("GROUP DELETION FAILED");
		}
	}).catch(err => {
		console.log(err);
	});
};

export const addGroup = (page, name) => {
	const prof = page.props.app.state.currentUser;
	let reg = /^[0-9a-zA-Z]+[-]?[0-9a-zA-Z]+$/;

	if (!reg.test(name)) {
		alert("Group must be alphanumeric strings with an optional - in the middle!");
		page.setState({err: true});
	} else {
		axios.post("https://accelsnow.com/groups/", {
				name: name,
				owner: prof.username,
				students: []
			}
		).then(res => {
			if (!res.data.result) {
				alert("Group already exists!");
				page.setState({err: true});
			} else {
				alert("Group added!");
				getGroupUserList(page, res.data.result.username);
				page.setState({err: false});
			}
		}).catch(error => {
			console.log(error)
		});
	}
};

export const addToGroup = (page, username, groupName) => {
	axios.patch("https://accelsnow.com/groups/add", {
		studentName: username,
		groupName: groupName
	}).then(res => {
		if (!res.data.result) {
			alert("Student must be present and not enrolled in this group yet");
		} else {
			alert(`Student ${username} Added to group ${groupName}!`);
			sendMessage(page.props.app, username, `You have been added to group ${groupName} by professor 
			${page.props.app.state.currentUser.name}(${page.props.app.state.currentUser.username})`);
		}
		getGroupUserList(page, page.props.app.state.currentUser.username);
	}).catch(err => {
		console.log(err);
	});
};

export const removeFromGroup = (page, username, groupName) => {
	axios.patch("https://accelsnow.com/groups/remove", {
		studentName: username,
		groupName: groupName
	}).then(res => {
		if (!res.data.result) {
			alert("Student must be present and enrolled in this group yet");
		} else {
			if (page.props.app.state.currentUser.type === "student") {
				alert(`You have dropped from group ${groupName}!`);
				sendMessage(page.props.app, page.state.g2u[groupName][0].username,
					`Student ${username} has dropped from group ${groupName}!`);
			} else {
				alert(`Student ${username} Removed from group ${groupName}!`);
				sendMessage(page.props.app, username, `You have been removed from group ${groupName} 
				by professor ${page.props.app.state.currentUser.name}(${page.props.app.state.currentUser.username})`);
			}
		}
		getGroupUserList(page, page.props.app.state.currentUser.username);
	}).catch(err => {
		console.log(err);
	});
};

export const broadcastMessage = (app, groupName, message) => {
	axios.post("https://accelsnow.com/groups/message", {groupName: groupName, message: message}).then(res => {
		if (!res.data.result) {
			console.log("FAILED TO BROADCAST MESSAGE");
		} else {
			readCookie(app);
		}
	}).catch(err => {
		console.log(err);
	});
};