import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {withRouter} from "react-router-dom";
import ToolBar from "./ToolBar.js";
import "./mainstyle.css"
import "./StudentGroupPage.css"
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {removeFromGroup} from "../actions/group";
import Button from "@material-ui/core/Button";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';

class StudentGroupPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            footerClass: "copyright-info abs-bottom"
        };
    }

    onDrop = (group) => {
        removeFromGroup(this, this.props.app.state.currentUser, group);
    };

    componentDidUpdate(prevProps, prevState, snap) {
        adjustFooter(this);
    };

    componentDidMount() {
        adjustFooter(this);
    }

    render() {
        const groups = this.props.app.state.currentUser.joined_groups;

        if (groups === null || groups === []) {
            return (<div/>);
        }

        return (
            <ThemeProvider theme={theme}>
                <div className="render-container">
                    <ToolBar history={this.props.history} app={this.props.app}/>

                    <div className={"main-area"}>
                        <h1 className="title">Enrolled Groups</h1>
                        <Divider/><br/>

                        <Grid container justify={"flex-start"} alignItems={"center"} spacing={3}
                              id={"group-table-containers"}>
                            {
                                groups.map(group => (
                                    <Grid item key={group.id}>
                                        <Grid container direction="row" justify="flex-start" alignItems="center"
                                              spacing={2}>
                                            <Grid item>
                                                <h2>{group.name}</h2>
                                            </Grid>
                                            <Grid item>
                                                <Button variant="contained" size="small"
                                                        onClick={this.onDrop.bind(this, group)}>Drop</Button>
                                            </Grid>
                                        </Grid>
                                        <TableContainer component={Paper}><Table aria-label={group}
                                                                                 className={"group-table"}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell><b>Name</b></TableCell>
                                                    <TableCell><b>Username</b></TableCell>
                                                    <TableCell><b>Email</b></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>{
                                                group.users.map((userObj, index) => {
                                                    if (index === 0) {
                                                        return <TableRow key={userObj.username}>
                                                            <TableCell><span
                                                                className={"ownerTxt"}>{userObj.name}</span></TableCell>
                                                            <TableCell><span
                                                                className={"ownerTxt"}>{userObj.username}</span></TableCell>
                                                            <TableCell><span
                                                                className={"ownerTxt"}>{userObj.email}</span></TableCell>
                                                        </TableRow>
                                                    } else {
                                                        return <TableRow key={userObj.username}>
                                                            <TableCell>{userObj.name}</TableCell>
                                                            <TableCell>{userObj.username}</TableCell>
                                                            <TableCell>{userObj.email}</TableCell>
                                                        </TableRow>
                                                    }
                                                })}
                                            </TableBody>
                                        </Table></TableContainer>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                </div>
                {footer(this)}
            </ThemeProvider>
        );


    }
}

export default withRouter(StudentGroupPage);
