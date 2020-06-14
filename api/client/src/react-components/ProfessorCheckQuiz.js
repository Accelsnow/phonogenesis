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
import {getUserQuizzes, getStudentQuizObj} from "../actions/quiz";
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

class ProfessorCheckQuiz extends React.Component {

	constructor(props) {
		super(props);
		this.props.history.push("/professor/quizresult");
		this.state = {
			showResult: false,
			studentQuizObj: [],
			currentQuizName: "",
			quizzes: [],
			selectedQuiz: ""
		};
		getUserQuizzes(this, this.props.app.state.currentUser.username);
	}

	showDetails = (quiz) => {
		localStorage.setItem("quiz", JSON.stringify(quiz));
		localStorage.setItem("isActive", "0");
		this.props.history.push("/quiztaker");
	};

	getStudentQuiz = () => {
		const currentQuizName = this.state.selectedQuiz;
		this.setState({currentQuizName: currentQuizName});
		let groupName = "";

		this.state.quizzes.forEach(quiz => {
			if (quiz.name === currentQuizName){
				groupName = quiz.group;
			}
		});

		if (groupName === ""){
			alert("The rule is not associated with a group, or failed to fetch group from quiz!");
			return;
		}

		getStudentQuizObj(this, groupName, currentQuizName);
	};

	onQuizSelectChange = (event) => {
		this.setState({selectedQuiz: event.target.value});
	};

	render() {
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
									<Select value={this.state.selectedQuiz} label="quiz" id="quiz-sel"
									        labelId={"quiz-sel-label"} onChange={this.onQuizSelectChange}>
										{this.state.quizzes.map((quiz) => (
											<MenuItem key={quiz.name} value={quiz.name}>{quiz.name}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="secondary" onClick={this.getStudentQuiz.bind(this)}>Check
									Results</Button>
							</Grid>
						</Grid>
					</Grid>

					<Grid item>
						<Grid container direction="row" justify="flex-start"
						      alignItems="center">
							<Grid item><h2>{this.state.currentQuizName}</h2></Grid>
						</Grid>

						<TableContainer component={Paper}>
							<Table aria-label="student-quiz table">
								<TableHead>
									<TableRow>
										<TableCell><b>Name</b></TableCell>
										<TableCell><b>Email</b></TableCell>
										<TableCell><b>Username</b></TableCell>
										<TableCell><b>Group</b></TableCell>
										<TableCell><b>Score</b></TableCell>
										<TableCell><b>Time Completed</b></TableCell>
										<TableCell><b>Detailed Answer</b></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{
										this.state.studentQuizObj.map((sqObj) => (
											<TableRow key={sqObj.username}>
												<TableCell>{sqObj.name}</TableCell>
												<TableCell>{sqObj.email}</TableCell>
												<TableCell>{sqObj.username}</TableCell>
												<TableCell>{sqObj.group}</TableCell>
												<TableCell>{sqObj.score}</TableCell>
												<TableCell>{sqObj.timeStamp}</TableCell>
												<TableCell>
													<Button disabled={!sqObj.quiz}
													        onClick={this.showDetails.bind(this, sqObj.quiz)}>Detail</Button>
												</TableCell>
											</TableRow>
										))
									}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default withRouter(ProfessorCheckQuiz);