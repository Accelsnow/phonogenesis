import React from "react";
import {withRouter} from "react-router-dom"
import ToolBar from "./ToolBar.js"
import {makeStyles} from '@material-ui/core/styles';
import "./mainstyle.css"
import Divider from "@material-ui/core/Divider";
import MessagePanel from "./MessagePanel";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';

class ProfessorHome extends React.Component {
    classes = makeStyles(theme => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));

    constructor(props) {
        super(props);
        this.props.history.push("/professor");
        this.state = {
            footerClass: "copyright-info abs-bottom",
        };
    }

    componentDidUpdate(prevProps, prevState, snap) {
        adjustFooter(this);
    };

    componentDidMount() {
        adjustFooter(this);
    }

    render() {
        const prof = this.props.app.state.currentUser;
        const owned_groups = [];
        prof.owned_groups.forEach(g => owned_groups.push(g.name));

        return (
            <ThemeProvider theme={theme}>
                <div className="render-container">
                    <ToolBar history={this.props.history} app={this.props.app}/>
                    <div className="main-area">
                        <h2>Account Information</h2>
                        <Divider/><br/>

                        <p><span className="bold">Name: {prof.name ? prof.name : "Anonymous"}</span></p>
                        <p><span className="bold">Email: {prof.email ? prof.email : "Undefined"}</span></p>
                        <p><span onClick={() => this.props.history.push("/professor/groups")} className="bold"
                                 id="link-button">Instructing: {prof.owned_groups.length > 0 ? owned_groups.join(", ") : "None"}</span>
                        </p>
                        <br/>
                        <MessagePanel app={this.props.app}/>
                    </div>
                </div>
                {footer(this)}
            </ThemeProvider>
        );
    }

}

export default withRouter(ProfessorHome);
