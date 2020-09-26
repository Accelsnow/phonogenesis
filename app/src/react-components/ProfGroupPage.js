import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import ToolBar from "./ToolBar.js";
import {withRouter} from "react-router-dom";
import "./mainstyle.css"
import {addGroup, addToGroup, removeFromGroup, removeGroup} from "../actions/group";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';


import "./ProfGroupPage.css";
import Button from "@material-ui/core/Button";

class ProfGroupPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            footerClass: "copyright-info abs-bottom",
            newGroupName: '',
            err: false
        };
    }

    onAddToGroup = (group) => {
        const username = document.getElementById("add-input-".concat(group.id)).value;
        addToGroup(this, username, group);
    };

    onRemoveStudent = (group, user) => {
        removeFromGroup(this, user, group);
    };

    onCreateGroup = () => {
        const name = document.getElementById("new-group-name-field").value;
        addGroup(this, name);
    };

    onRemoveGroup = (group) => {
        removeGroup(this, group);
    };

    componentDidUpdate(prevProps, prevState, snap) {
        adjustFooter(this);
    };

    componentDidMount() {
        adjustFooter(this);
    }

    render() {
        const groups = this.props.app.state.currentUser.owned_groups;

        return (
            <ThemeProvider theme={theme}>
                <ToolBar history={this.props.history} app={this.props.app}/>
                <Grid container id="prof-group-lst" direction="column" justify="flex-start" alignItems="flex-start">
                    <Grid item id={"prof-group-header"}>
                        <Grid id={"add-group-grid"} container direction="row" justify="flex-start" alignItems="center"
                              spacing={3}>
                            <Grid item>
                                <TextField id="new-group-name-field" label="Group Name" error={this.state.err}
                                           helperText={this.state.err ? "invalid group name" : ''}>
                                    Group Name</TextField>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={this.onCreateGroup.bind(this)}>Create
                                    Group</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {
                        groups.map((group) => {
                            return <Grid item key={group.id} id="prof-group-body">
                                <Grid container spacing={2} direction="row" justify="flex-start"
                                      alignItems="center">
                                    <Grid item><h3>{group.name}</h3></Grid>
                                    <Grid item>
                                        <IconButton onClick={this.onRemoveGroup.bind(this, group)}>
                                            <DeleteIcon>Remove</DeleteIcon></IconButton>
                                    </Grid>
                                </Grid>
                                <TableContainer component={Paper}>
                                    <Table aria-label="student table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><b>Name</b></TableCell>
                                                <TableCell><b>Email</b></TableCell>
                                                <TableCell><b>Username</b></TableCell>
                                                <TableCell><b>Remove Student</b></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                group.users.map(stuObj => {
                                                    return <TableRow key={stuObj.username}>
                                                        <TableCell>{stuObj.name}</TableCell>
                                                        <TableCell>{stuObj.email}</TableCell>
                                                        <TableCell>{stuObj.username}</TableCell>
                                                        <TableCell>
                                                            <IconButton
                                                                onClick={this.onRemoveStudent.bind(this, group, stuObj)}><DeleteIcon>Remove</DeleteIcon></IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                })
                                            }
                                        </TableBody>
                                    </Table>

                                    <form className="add-student-form">
                                        <TextField id={"add-input-".concat(group.id)}
                                                   label="student username">Name</TextField>
                                        <IconButton onClick={this.onAddToGroup.bind(this, group)}><AddIcon>Add
                                            Student</AddIcon></IconButton>
                                    </form>
                                </TableContainer>
                            </Grid>
                        })
                    }
                </Grid>
                {footer(this)}
            </ThemeProvider>
        )

    }
}

export default withRouter(ProfGroupPage);
