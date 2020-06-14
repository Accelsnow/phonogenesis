import React from "react";
import {withRouter} from "react-router-dom"
import TopBar from "./TopBar.js"
import Button from "@material-ui/core/Button"
import "./mainstyle.css"
import Paper from "@material-ui/core/Paper";
import {getUserQuizzes} from "../actions/quiz";
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
		this.state = {quizzes: []};
		getUserQuizzes(this, this.props.app.state.currentUser.username);
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
									<TableCell><b>Group</b></TableCell>
									<TableCell><b>Time Completed</b></TableCell>
									<TableCell><b>Score</b></TableCell>
									<TableCell><b>Action</b></TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{this.state.quizzes.map((quiz) => {
									return (<TableRow key={quiz.name}>
										<TableCell>{quiz.name}</TableCell>
										<TableCell>{quiz.owner}</TableCell>
										<TableCell>{quiz.group}</TableCell>
										{quiz.pastResult ? (
											<React.Fragment>
												<TableCell>{quiz.pastResult.timeStamp}</TableCell>
												<TableCell>{`${quiz.pastResult.score}/${quiz.questions.length}`}</TableCell>
												<TableCell><Button
													onClick={this.onReview.bind(this, quiz)}
													variant="contained">Review</Button></TableCell>
											</React.Fragment>
										) : (
											<React.Fragment>
												<TableCell>NOT COMPLETED</TableCell>
												<TableCell>NOT COMPLETED</TableCell>
												<TableCell><Button onClick={this.onTakeQuiz.bind(this, quiz)}
												                   variant="contained" size="small">Take
													Quiz</Button></TableCell>
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
