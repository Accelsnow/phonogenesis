import React from "react";
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import "./Signup.css"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';
import "./mainstyle.css"

import {login} from "../actions/user";
import ToolBar from "./ToolBar";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            footerClass: "copyright-info abs-bottom",
            err: false,
            username: "",
            password: "",
            showPassword: false
        };
    }

    handleTextFieldChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
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
                <div id="outer-container">
                    <div id="grid-container">
                        <Grid container direction="column" justify="center" alignItems="center" spacing={2}
                              id="input-grid"
                              className="login-grid">
                            <Grid item>
                                <Grid className="grid-item" container spacing={1} justify="center"
                                      alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle/>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            id="username"
                                            label="Username"
                                            onChange={this.handleTextFieldChange}
                                            error={this.state.err}
                                            helperText={this.state.err ? "incorrect username or password" : ''}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <TextField className="grid-item"
                                           id="password"
                                           label="Password"
                                           onChange={this.handleTextFieldChange}
                                           error={this.state.err}
                                           type={this.state.showPassword ? 'text' : 'password'}
                                           helperText={this.state.err ? "incorrect username or password" : ''}
                                           InputProps={{
                                               endAdornment:
                                                   <InputAdornment>
                                                       <IconButton onClick={
                                                           () => this.setState({showPassword: !this.state.showPassword})}>
                                                           {this.state.showPassword ? <Visibility/> : <VisibilityOff/>}
                                                       </IconButton>
                                                   </InputAdornment>,
                                           }}
                                />
                            </Grid>

                            <Grid item>
                                <Button variant="contained" color="primary" className="grid-item" id="submit-button"
                                        onClick={() => login(this, this.state.username, this.state.password)}>Login</Button>
                            </Grid>

                            <Grid item>
                                <p className="grid-item">Don't have an account? Sign up <a href="/signup">here</a>.</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                {footer(this)}
            </ThemeProvider>
        );
    }
}

export default withRouter(Login);
