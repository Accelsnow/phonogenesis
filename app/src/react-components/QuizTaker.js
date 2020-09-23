import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./QuizTaker.css";
import "./mainstyle.css"
import QuestionBlock from "./QuestionBlock";
import TopBar from "./TopBar.js"
import Countdown from 'react-countdown-now';
import {withRouter} from "react-router-dom";
import {registerResult} from "../actions/quiz";
import TextField from "@material-ui/core/TextField";

class QuizTaker extends React.Component {
    constructor(props) {
        super(props);
        const quiz = JSON.parse(localStorage.getItem("quiz"));

        if (!quiz) {
            this.state = {};
            alert("No active/selected quiz! Redirecting back to your main page.");
            this.props.history.push("/");
        } else {
            this.state = {
                quiz: quiz,
                questionIndex: 0,
                isActive: localStorage.getItem("isActive") === "1",
                studentAnswers: [],
                needFetch: true,
                answerError: "",
            };
            this.questionBlockElement = React.createRef();
        }
    }


    onSubmitAnswer = () => {
        const quiz = this.state.quiz;
        const curr_answer = document.getElementById('answer-input').value;

        if (!curr_answer || curr_answer.length === 0) {
            this.setState({answerError: "answer can not be empty"});
            return;
        } else {
            this.setState({answerError: ""});
        }

        const newIndex = this.state.questionIndex + 1;
        this.setState({questionIndex: newIndex});

        if (newIndex >= quiz.questions.length) {
            localStorage.setItem("isActive", "0");
            const quizResult = {
                score: "Not Graded",
                answers: this.state.studentAnswers.concat(curr_answer)
            };
            this.setState({currAttempt: quizResult});
            registerResult(quizResult, this.props.app.state.currentUser, quiz, this);
        }

        this.setState({studentAnswers: this.state.studentAnswers.concat(curr_answer)});
        document.getElementById('answer-input').value = "";
        this.questionBlockElement.current.resetState();
    };

    onTimeUp = () => {
        alert("You've used up all your time!");
        this.setState({questionIndex: this.state.quiz.questions.length});
    };

    onBack = () => {
        localStorage.clear();
        this.props.history.goBack();
    };

    render() {
        if (this.state.quiz === undefined) {
            return <div/>;
        }

        const quiz = this.state.quiz;
        const size = quiz.questions.length;
        const index = this.state.questionIndex;
        const currQuestion = quiz.questions[index];
        const isActive = this.state.isActive;

        if (index < size && currQuestion && isActive) {
            return (
                <div className="render-container">
                    <TopBar history={this.props.history} app={this.props.app}/>
                    <br/>
                    <h3 id="quiz-title">Quiz: {quiz.name}</h3>
                    <hr className="qtaker-hr"/>
                    <QuestionBlock ref={this.questionBlockElement} question={currQuestion} showAnswer={false}
                                   isReadOnly={false} isQuiz={true}/>
                    <hr className="qtaker-hr"/>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
                        <Grid item id="ctd"> Time Remaining &nbsp; <CountdownTimer id="ctd-timer"
                                                                                   msec={quiz.time_limit_seconds * 1000}
                                                                                   onTimeUp={this.onTimeUp}/>
                        </Grid>

                        <Grid item>
                            <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                                <Grid item><TextField required error={this.state.answerError !== ""}
                                                      helperText={this.state.answerError} id="answer-input"
                                                      label="Your Answer" defaultValue=""/></Grid>
                                <Grid item><Button variant="contained" id="submit-answer"
                                                   onClick={this.onSubmitAnswer}>Next Question</Button></Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <br/>
                    <hr className="qtaker-hr"/>
                </div>
            );
        } else {
            let attempt = this.state.currAttempt || this.state.quiz.attempts[0];

            if (!attempt) {
                return (<div>
                    <Grid container direction="column" justify="flex-start" alignItems="center" spacing={5}>
                        <Grid item><h3>Quiz is no longer active.</h3></Grid>
                        <Grid item><Button variant="contained" onClick={this.onBack.bind(this)}>back to quiz
                            page</Button></Grid>
                    </Grid>
                </div>)
            }

            const score = attempt.score;

            const displayAns = attempt.answers;

            return (
                <div id="render-container">
                    <TopBar history={this.props.history} app={this.props.app}/>
                    <Grid container direction="column" justify="flex-start" alignItems="center" spacing={5}>
                        <Grid item>
                            <h2>You've Completed the Quiz!</h2>
                            {typeof score === 'number' ? <h3>Score: {score}/{size}</h3> : <h3>Score: {score}</h3>}
                            <Button variant="contained" onClick={this.onBack.bind(this)}>back to quiz page</Button>
                            <br/>
                        </Grid>

                        <Grid item>
                            {quiz.questions.map((question, index) => (
                                <div key={index}>
                                    <QuestionBlock ref={this.questionBlockElement} question={question} isReadOnly={true}
                                                   showAnswer={true} isQuiz={false}/>
                                    <p><span id="correctAnswerTxt">Correct Answer: {question.rule_name}</span></p>
                                    <p><span id="studentAnswerTxt">Your Answer: {
                                        displayAns[index] ? displayAns[index] : "Timed Out"
                                    }</span></p>
                                    <br/>
                                    <hr/>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}

class CountdownTimer extends React.PureComponent {
    render() {
        return (
            <Countdown date={Date.now() + this.props.msec} onComplete={this.props.onTimeUp}/>
        );
    }
}

export default withRouter(QuizTaker);
