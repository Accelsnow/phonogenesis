import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {addUser} from '../actions/user'
import {withRouter} from "react-router-dom"
import "./Signup.css";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from "@material-ui/styles";
import ToolBar from "./ToolBar";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footerClass: "copyright-info abs-bottom",
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

    componentDidUpdate(prevProps, prevState, snap) {
        adjustFooter(this);
    };

    componentDidMount() {
        adjustFooter(this);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <ToolBar history={this.props.history} app={this.props.app}/>
                <div id={"outer-container"}>
                    <div id={"grid-container"}>
                        <Grid container justify="center" alignItems="center" direction="column" spacing={2}
                              id="input-grid">
                            <Grid item>
                                <TextField required id="username" className="grid-item" label="Username"
                                           variant="outlined" onChange={this.handleTextFieldChange}/>
                            </Grid>
                            <Grid item>
                                <TextField required id="password" className="grid-item" label="Password"
                                           variant="outlined"
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
                {footer(this)}
            </ThemeProvider>
        )
    }
}

export default withRouter(SignUp)
