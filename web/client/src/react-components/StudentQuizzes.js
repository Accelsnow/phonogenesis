import React from "react";
import {withRouter} from "react-router-dom"
import TopBar from "./TopBar.js"
import Button from "@material-ui/core/Button"
import "./mainstyle.css"
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Grid from "@material-ui/core/Grid";
import "./StudentQuizzes.css";

class StudentQuizzes extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/student/checkquiz");
    }

    onReview = (quiz) => {
        localStorage.setItem("quiz", JSON.stringify(quiz));
        localStorage.setItem("isActive", "0");
        this.props.history.push("/quiztaker");
    };

    onTakeQuiz = (quiz) => {
        localStorage.setItem("quiz", JSON.stringify(quiz));
        localStorage.setItem("isActive", "1");
        this.props.history.push("/quiztaker");
    };

    render() {
        const quizzes = this.props.app.state.currentUser.recv_quizzes;

        return (<div className="render-container">
            <TopBar history={this.props.history} app={this.props.app}/>
            <Grid container direction="column" spacing={4} justify="center" alignItems="center">
                <Grid item id="check-quiz">
                    <TableContainer component={Paper}>
                        <Table aria-label="student table" id="stu-quiz-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Quiz Name</b></TableCell>
                                    <TableCell><b>Distributor</b></TableCell>
                                    <TableCell><b>Time Completed</b></TableCell>
                                    <TableCell><b>Score</b></TableCell>
                                    <TableCell><b>Action</b></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {quizzes.map((quiz) => {
                                    return (<TableRow key={quiz.id}>
                                        <TableCell>{quiz.name}</TableCell>
                                        <TableCell>{quiz.owner.username}</TableCell>
                                        {quiz.attempts.length === 0 ? (
                                            <React.Fragment>
                                                <TableCell>NOT COMPLETED</TableCell>
                                                <TableCell>NOT COMPLETED</TableCell>
                                                <TableCell><Button onClick={this.onTakeQuiz.bind(this, quiz)}
                                                                   variant="contained" size="small">Take
                                                    Quiz</Button></TableCell>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <TableCell>{quiz.attempts[0].timestamp}</TableCell>
                                                {typeof quiz.attempts[0].score === 'number' ?
                                                    <TableCell>{`${quiz.attempts[0].score}/${quiz.questions.length}`}</TableCell> :
                                                    <TableCell>{quiz.attempts[0].score}</TableCell>}
                                                <TableCell><Button
                                                    onClick={this.onReview.bind(this, quiz)}
                                                    variant="contained">Review</Button></TableCell>
                                            </React.Fragment>
                                        )}
                                    </TableRow>);
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>);
    }
}

export default withRouter(StudentQuizzes);
