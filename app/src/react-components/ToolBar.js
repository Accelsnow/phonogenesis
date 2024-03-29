import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider'
import {withRouter} from "react-router-dom"
import {logout} from "../actions/user";
import {theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';
import './Toolbar.css'

const studentNav = ['Home', 'Groups', 'Quiz', 'Practice', 'Instructions', 'About', 'Log Out'];
const profNav = ['Home', 'Make Quiz', 'Quiz Results', 'Groups', 'Instructions', 'About', 'Log Out'];
const guestNav = ['Home', 'About']


class ToolBar extends React.Component {
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
            switch (text) {
                case 'Home':
                    destPath = '/';
                    break;

                case "Advanced":
                    destPath = '/advanced';
                    break;

                case "Login/Sign up":
                    destPath = '/login';
                    break;

                case "About":
                    destPath = '/about';
                    break;

                case "Instructions":
                    destPath = '/instructions';
                    break;

                default:
                    console.log("UNKNOWN TOP BAR BRANCH");
                    alert("Invalid redirection! Page may be under construction. Redirecting you back to front page.");
                    destPath = '/';
                    break;
            }
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

                case "Instructions":
                    destPath = '/instructions';
                    break;

                case "About":
                    destPath = "/about";
                    break;

                case "Log Out":
                    logout();
                    this.props.app.setState({currentUser: null});
                    destPath = "/";
                    break;

                default:
                    console.log("UNKNOWN TOP BAR BRANCH");
                    alert("Invalid redirection! Page may be under construction. Redirecting you back to front page.");
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
        const user = this.props.app.state.currentUser;

        return (
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" onClick={this.openDrawer} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        {/*<img alt="P" className="Logo" src='../phonogenesis%20favicon.png' />*/}
                        <h3>PHONOGENESIS: An Application for Generating Novel Phonological Data </h3>
                    </Toolbar>
                </AppBar>

                <Drawer variant="persistent" anchor="left" open={this.state.isOpen}>
                    <IconButton onClick={this.closeDrawer}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <Divider/>
                    <List>
                        {(user ? user.type === "student" ? studentNav : (user.type === "professor" ? profNav : (user.type === "admin" ? ['About', 'Instructions', 'Log Out'] : ['About', 'Instructions', 'Login/Sign up'])) : guestNav).map((text) => (
                            <ListItem button onClick={() => this.navigate(text)} key={text}>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

            </ThemeProvider>
        )
    }
}

export default withRouter(ToolBar);
