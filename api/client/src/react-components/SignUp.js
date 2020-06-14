import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {addUser} from '../actions/user'
import {withRouter} from "react-router-dom"
import "./LoginSignup.css";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "student",
			usernameError: ""
		};
	}

	handleTextFieldChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	onChangeType = (e) => {
		this.setState({
			type: e.target.value
		});
	};

	onSignUp = () => {
		addUser(this);
	};

	render() {
		return (
			<div id={"outer-container"}>
				<div id={"grid-container"}>
					<Grid container justify="center" alignItems="center" direction="column" spacing={2}
					      id="input-grid">
						<Grid item>
							<TextField id="username" className="grid-item" label="Username"
							           error={this.state.usernameError !== ""} required
							           helperText={this.state.usernameError} variant="outlined"
							           onChange={this.handleTextFieldChange}/>
						</Grid>
						<Grid item>
							<TextField required id="password" className="grid-item" label="Password" variant="outlined"
							           onChange={this.handleTextFieldChange}/>
						</Grid>
						<Grid item>
							<TextField required id="name" className="grid-item" label="Name" variant="outlined"
							           onChange={this.handleTextFieldChange}/>
						</Grid>
						<Grid item>
							<TextField required id="email" className="grid-item" label="Email" variant="outlined"
							           onChange={this.handleTextFieldChange}/>
						</Grid>
						<Grid item>
							<FormControl variant="outlined" className="grid-item">
								<InputLabel id="type-sel-label">account type</InputLabel>
								<Select value={this.state.type} labelId="type-sel-label" label={"account type"}
								        id={"type-sel"}
								        onChange={this.onChangeType}>
									<MenuItem value={"student"}>student</MenuItem>
									<MenuItem value={"professor"}>professor</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item>
							<Button variant="contained" color="primary" className="grid-item" id="submit-button"
							        onClick={this.onSignUp}>Sign Up</Button>
						</Grid>
						<Grid item>
							<p><a href="/login">Login</a></p>
						</Grid>
					</Grid>
				</div>
			</div>
		)
	}
}

export default withRouter(SignUp)
