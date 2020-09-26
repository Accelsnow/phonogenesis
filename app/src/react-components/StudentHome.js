import React from "react";
import {withRouter} from "react-router-dom"
import ToolBar from "./ToolBar.js"
import "./mainstyle.css"
import Divider from "@material-ui/core/Divider";
import MessagePanel from "./MessagePanel";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';

class StudentHome extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/student");
        this.state = {footerClass: "copyright-info abs-bottom",};
    }

    componentDidUpdate(prevProps, prevState, snap) {
        adjustFooter(this);
    };

    componentDidMount() {
        adjustFooter(this);
    }

    render() {
        const student = this.props.app.state.currentUser;
        const joined_groups = [];
        student.joined_groups.forEach(g => joined_groups.push(g.name));

        if (!student) {
            return <div/>
        }

        return (
            <ThemeProvider theme={theme}>
                <div className="render-container">
                    <ToolBar history={this.props.history} app={this.props.app}/>

                    <div className="main-area">
                        <h2>Account Information</h2>
                        <Divider/><br/>
                        <p><span className="bold">Name: {student.name ? student.name : "Anonymous"}</span></p>
                        <p><span className="bold">Email: {student.email ? student.email : "Undefined"}</span></p>
                        <p><span onClick={() => this.props.history.push("/student/groups")} className="bold"
                                 id="link-button">Enrolled: {joined_groups.length > 0 ? joined_groups.join(", ") : "None"}</span>
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

export default withRouter(StudentHome);
