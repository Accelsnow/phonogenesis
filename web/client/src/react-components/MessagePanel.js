import React from "react";
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button"
import "./mainstyle.css"
import "./MessagePanel.css"
import {TextField} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {deleteMessage, getUsers, sendMessage} from "../actions/user";
import {broadcastMessage} from "../actions/group";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";


class MessagePanel extends React.Component {
	constructor(props) {
		super(props);

		let defaultGroup;
		if (this.props.app.state.currentUser.groups.length > 0) {
			defaultGroup = this.props.app.state.currentUser.groups[0];
		} else {
			defaultGroup = "";
		}

		this.state = {
			mode: "p2p",
			users: null,
			contentErr: false,
			targetUser: this.props.app.state.currentUser.username,
			targetGroup: defaultGroup
		};
		getUsers(this);
	}

	onModeChange = (event) => {
		this.setState({mode: event.target.value});
	};

	onUserChange = (event) => {
		this.setState({targetUser: event.target.value});
	};

	onGroupChange = (event) => {
		this.setState({targetGroup: event.target.value});
	};

	onDeleteMessage = (msg) => {
		deleteMessage(this.props.app, this.props.app.state.currentUser.username, msg._id);
	};

	onSend = (event) => {
		event.preventDefault();
		const rawMessage = document.getElementById("message-textfield").value;
		if (!rawMessage || rawMessage.length < 1) {
			alert("Message cannot be empty!");
			this.setState({contentErr: true});
			return;
		}
		this.setState({contentErr: false});

		const message = `From ${this.props.app.state.currentUser.username}: ${rawMessage}`;
		switch (this.state.mode) {
			case "p2p":
				if (!this.state.targetUser) {
					alert("Must select target user!");
					return;
				}
				sendMessage(this.props.app, this.state.targetUser, message);
				alert("Message Sent");
				break;

			case "p2g":
				if (!this.state.targetGroup) {
					alert("Must select target group!");
					return;
				}
				broadcastMessage(this.props.app, this.state.targetGroup, message);
				alert("Message Sent");
				break;

			default:
				console.log("FATAL ERROR UNKNOWN MODE");
				break;
		}
	};

	render() {
		let users;
		if (this.props.users) {
			users = this.props.users;
		} else if (this.state.users === null) {
			return <div/>
		} else {
			users = this.state.users;
		}

		let groups;
		if (this.props.groups) {
			groups = this.props.groups;
		} else {
			groups = this.props.app.state.currentUser.groups;
		}

		return (
			<div id="msg-panel-container">
				<h2>Send Message</h2>
				<Divider/>
				<br/>
				<Grid container justify="flex-start" alignItems="flex-end" spacing={3}>
					<Grid item>
						<TextField error={this.state.contentErr} multiline required label={"message"}
						           id={"message-textfield"}/>
					</Grid>
					<Grid item>
						<Select onChange={this.onModeChange} value={this.state.mode} id={"mode-sel"}>
							<MenuItem value={"p2p"}>Send to User</MenuItem>
							<MenuItem value={"p2g"}>Broadcast to Group</MenuItem>
						</Select>
					</Grid>
					<Grid item>
						{
							this.state.mode === "p2p" ? (
								<Select value={this.state.targetUser} onChange={this.onUserChange} id={"user-sel"}>
									{
										users.map(user => (
											<MenuItem key={user.username}
											          value={user.username}>{user.username}</MenuItem>
										))
									}
								</Select>
							) : (
								<Select value={this.state.targetGroup} onChange={this.onGroupChange} id={"group-sel"}>
									{
										groups.map(group => (
											<MenuItem key={group} value={group}>{group}</MenuItem>
										))
									}
								</Select>
							)
						}
					</Grid>
					<Grid item>
						<Button variant="contained" color="primary" onClick={this.onSend}>Send</Button>
					</Grid>
				</Grid>
				<br/>
				<h2>Incoming Messages</h2>
				<Divider/>
				<br/>
				{
					this.props.app.state.currentUser.messages.length === 0 ? (
						<h3>You have no incoming message.</h3>
					) : (
						<div>
							<GridList cols={3} cellHeight="auto">
								{this.props.app.state.currentUser.messages.map((msg, index) => (
									<GridListTile key={index} className={"message-tile"}>
										<Card variant="outlined">
											<CardContent>
												<p className={"message-timestamp-text"}>{msg.timeStamp}</p>
												<p className={"message-content-text"}>{msg.content}</p>
											</CardContent>

											<CardActions>
												<Button onClick={this.onDeleteMessage.bind(this, msg)}
												        size="small">remove</Button>
											</CardActions>
										</Card>
									</GridListTile>
								))}
							</GridList>
						</div>
					)
				}
			</div>
		);
	}
}

export default withRouter(MessagePanel);
