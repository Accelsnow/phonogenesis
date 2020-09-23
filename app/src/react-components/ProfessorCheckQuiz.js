import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TopBar from "./TopBar.js";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./ProfessorCheckQuiz.css"
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {readCookie} from "../actions/user";

class ProfessorCheckQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/professor/quizresult");
        this.state = {
            showResult: false,
            studentQuizObj: [],
            quizIndex: "",
            currQuiz: null
        };
        readCookie(this.props.app);
    }

    showDetails = (quiz) => {
        localStorage.setItem("quiz", JSON.stringify(quiz));
        localStorage.setItem("isActive", "0");
        this.props.history.push("/quiztaker");
    };

    getStudentQuiz = () => {
        const quizIndex = this.state.quizIndex;

        if (quizIndex === "") {
            alert("No quiz selected!")
        }

        this.setState({currQuiz: this.props.app.state.currentUser.owned_quizzes[quizIndex]})
    };

    onQuizSelectChange = (event) => {
        this.setState({quizIndex: event.target.value});
    };

    render() {
        const quizzes = this.props.app.state.currentUser.owned_quizzes;

        return (
            <div>
                <TopBar history={this.props.history} app={this.props.app}/>
                <br/><br/>

                <Grid container direction="column" spacing={2} justify="center" alignItems="center">
                    <Grid item>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                            <Grid item>
                                <FormControl variant="outlined">
                                    <InputLabel id="quiz-sel-label">Quiz</InputLabel>
                                    <Select value={this.state.quizIndex} label="quiz" id="quiz-sel"
                                            labelId={"quiz-sel-label"} onChange={this.onQuizSelectChange}>
                                        {quizzes.map((quiz, index) => (
                                            <MenuItem key={quiz.id} value={index}>{quiz.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="secondary" onClick={this.getStudentQuiz.bind(this)}>
                                    Check Results</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {this.state.currQuiz ? <Grid item>
                        <Grid container direction="row" justify="flex-start"
                              alignItems="center">
                            <Grid item><h2>Quiz: &nbsp; {this.state.currQuiz.name}</h2></Grid>
                        </Grid>

                        <TableContainer component={Paper}>
                            <Table aria-label="student-quiz table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><b>Name</b></TableCell>
                                        <TableCell><b>Email</b></TableCell>
                                        <TableCell><b>Username</b></TableCell>
                                        <TableCell><b>Score</b></TableCell>
                                        <TableCell><b>Time Completed</b></TableCell>
                                        <TableCell><b>Detailed Answer</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.currQuiz.attempts.map((attempt) => (
                                        <TableRow key={attempt.id}>
                                            <TableCell>{attempt.user.name}</TableCell>
                                            <TableCell>{attempt.user.email}</TableCell>
                                            <TableCell>{attempt.user.username}</TableCell>
                                            <TableCell>{attempt.score}</TableCell>
                                            <TableCell>{attempt.timestamp}</TableCell>
                                            <TableCell>
                                                <Button disabled={!attempt.quiz}
                                                        onClick={this.showDetails.bind(this, attempt.quiz)}>Detail</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid> : null}
                </Grid>
            </div>
        )
    }
}

export default withRouter(ProfessorCheckQuiz);