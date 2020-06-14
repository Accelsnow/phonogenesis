import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider'

import {withRouter} from "react-router-dom"
import {logout} from "../actions/user";

const studentNav = ['Home', 'Groups', 'Quiz', 'Practice', 'Log Out'];
const profNav = ['Home', 'Make Quiz', 'Quiz Results', 'Groups', 'Log Out'];

class TopBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	openDrawer = () => {
		this.setState({isOpen: true});
	};

	navigate = (text) => {
		let destPath;
		const currentUser = this.props.app.state.currentUser;

		if (!currentUser) {
			destPath = '/';
		} else {
			const type = currentUser.type;

			switch (text) {
				case "Home":
					if (type === "student") {
						destPath = "/student"
					} else if (type === "professor") {
						destPath = "/professor"
					} else {
						console.log("ERROR type invalid");
						destPath = '/';
					}
					break;

				case "Groups":
					if (type === "professor") {
						destPath = "/professor/groups"
					} else if (type === "student") {
						destPath = "/student/groups"
					} else {
						console.log("ERROR type invalid");
						destPath = '/';
					}
					break;

				case "Practice":
					destPath = "/student/gen";
					break;

				case "Quiz":
					destPath = "/student/checkquiz";
					break;

				case "Quiz Results":
					destPath = "/professor/quizresult";
					break;

				case "Make Quiz":
					destPath = "/professor/makequiz";
					break;

				case "Log Out":
					logout();
					this.props.app.setState({currentUser: null});
					destPath = "/login";
					break;

				default:
					console.log("UNKNOWN TOP BAR BRANCH");
					destPath = '/';
					break;
			}
		}

		this.props.history.push(destPath);
	};

	closeDrawer = () => {
		this.setState({isOpen: false});
	};

	render() {
		const type = this.props.app.state.currentUser.type;
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" onClick={this.openDrawer} color="inherit" aria-label="menu">
							<MenuIcon/>
						</IconButton>
						<h3>Phonogenesis</h3>
					</Toolbar>
				</AppBar>

				<Drawer variant="persistent" anchor="left" open={this.state.isOpen}>
					<IconButton onClick={this.closeDrawer}>
						<ChevronRightIcon/>
					</IconButton>
					<Divider/>
					<List>
						{(type === "student" ? studentNav : (type === "professor" ? profNav : ["Log Out"])).map((text) => (
							<ListItem button onClick={() => this.navigate(text)} key={text}>
								<ListItemText primary={text}/>
							</ListItem>
						))}
					</List>
				</Drawer>
			</div>
		)
	}
}

export default withRouter(TopBar);
