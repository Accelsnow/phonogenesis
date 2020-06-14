import React from "react";
import {withRouter} from "react-router-dom"
import TopBar from "./TopBar.js"
import "./mainstyle.css"
import Divider from "@material-ui/core/Divider";
import MessagePanel from "./MessagePanel";

class StudentHome extends React.Component {
	constructor(props) {
		super(props);
		this.props.history.push("/student");
		this.state = {};
	}

	render() {
		const student = this.props.app.state.currentUser;

		if (!student) {
			return <div/>
		}

		return (
			<div className="render-container">
				<TopBar history={this.props.history} app={this.props.app}/>

				<div className="main-area">
					<h2>Account Information</h2>
					<Divider/><br/>
					<p><span className="bold">Name: {student.name ? student.name : "Anonymous"}</span></p>
					<p><span className="bold">Email: {student.email ? student.email : "Undefined"}</span></p>
					<p><span onClick={() => this.props.history.push("/student/groups")} className="bold"
					         id="link-button">Enrolled: {student.groups.length > 0 ? student.groups.join(", ") : "None"}</span>
					</p>
					<br/>
					<MessagePanel app={this.props.app}/>
				</div>
			</div>
		);
	}

}

export default withRouter(StudentHome);
