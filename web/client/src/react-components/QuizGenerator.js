import React from "react";

import TextField from "@material-ui/core/TextField";
import TopBar from "./TopBar.js"
import {withRouter} from "react-router-dom"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import {getGroupUserList} from "../actions/group";
import {distributeQuiz, getDistinctRuleList} from "../actions/quiz";
import "./QuizGenerator.css";
import "./mainstyle.css"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

class QuizGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeErr: "",
			qCount: 0,
			g2u: null,
			rules: null,
			selectedGroup: ""
		};
		getGroupUserList(this, this.props.app.state.currentUser.username);
		getDistinctRuleList(this);
	};

	makeQuiz = () => {
		if (this.state.qCount <= 0) {
			alert("Quiz can not be empty");
			return;
		}

		const targetGroup = this.state.selectedGroup;
		if (!targetGroup || targetGroup === '') {
			alert("Must have a destination group!");
			return;
		}

		const quizTime = Number(document.getElementById("quiz-time").value);

		if (quizTime < 10) {
			alert("Time must be positive integer >= 10!");
			this.setState({timeErr: "must be >= 10"});
			return;
		} else {
			this.setState({timeErr: ""});
		}

		const quizName = document.getElementById("quiz-name").value;

		const qList = [];

		for (let i = 0; i < this.state.qCount; i++) {
			const canUR = document.getElementById("ur-check-".concat(i.toString())).checked;
			const canPhoneme = document.getElementById("phoneme-check-".concat(i.toString())).checked;
			const maxCADT = document.getElementById("max-cadt-sel-".concat(i.toString())).value;
			const ruleTxt = document.getElementById("rule-sel-".concat(i.toString())).value;
			const newQuestion = {
				rule: ruleTxt,
				size: 20,
				canUR: canUR,
				canPhoneme: canPhoneme,
				maxCADT: maxCADT
			};
			qList.push(newQuestion);
		}

		distributeQuiz(this, {
			timeLim: quizTime,
			name: quizName,
			group: targetGroup,
			owner: this.props.app.state.currentUser.username,
			pastResult: null,
			questions: qList
		});


		this.setState({qCount: 0});
		document.getElementById("quiz-name").value = "";
		document.getElementById("quiz-time").value = 0;
		this.forceUpdate();
	};

	createQuestionBlock = () => {
		this.setState({qCount: this.state.qCount + 1});
	};

	onGroupSelectChange = (event) => {
		this.setState({selectedGroup: event.target.value});
	};

	render() {
		if (this.state.g2u === null || this.state.rules === null){
			return <div/>
		}

		return (
			<div>
				<TopBar history={this.props.history} app={this.props.app}/>
				<br/><br/>

				<Grid container direction="column" spacing={4} justify="center" alignItems="center">
					<Grid item id="add-question-header">
						<Grid container direction="row"
						      spacing={4}>
							<Grid item>
								<TextField id="quiz-name" label="Quiz Name" variant="outlined"/>
							</Grid>
							<Grid item>
								<TextField id="quiz-time" type="number" variant="outlined"
								           label="Time Limit (in seconds)"
								           error={this.state.timeErr !== ""} helperText={this.state.timeErr}/>
							</Grid>
							<Grid item>
								<FormControl variant="outlined">
									<InputLabel id="group-sel-label">Group</InputLabel>
									<Select value={this.state.selectedGroup} label="group" id="group-sel"
									        labelId={"group-sel-label"} onChange={this.onGroupSelectChange}>
										{Object.keys(this.state.g2u).sort().map((group) => (
											<MenuItem value={group} key={group}>{group}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>

							<Grid item id="add-question-button">
								<Button variant="outlined" color="secondary" onClick={this.createQuestionBlock}>Add
									Question</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<hr/>
						<br/>
						{
							Array.from(Array(this.state.qCount).keys()).map((i) => (
								<Grid container spacing={4} direction="row" id="add-question-body" key={i} justify="center"
								      alignItems="center">
									<Grid item><FormControlLabel
										control={<Switch id={"ur-check-".concat(i.toString())}/>}
										label="Allow UR"/></Grid>
									<Grid item><FormControlLabel
										control={<Switch id={"phoneme-check-".concat(i.toString())}/>}
										label="Allow Phoneme"/></Grid>
									<Grid item>
										<NativeSelect id={"max-cadt-sel-".concat(i.toString())}>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
										</NativeSelect>
										<FormHelperText>max cadt#</FormHelperText>
									</Grid>
									<Grid item>
										<NativeSelect id={"rule-sel-".concat(i.toString())}>
											{this.state.rules.sort((e1, e2) => {
												if (e1.ruleTxt > e2.ruleTxt){
													return 1;
												} else if (e1.ruleTxt < e2.ruleTxt){
													return -1;
												}
												return 0;
											}).map(rule => (
												<option key={rule.ruleTxt} value={rule.ruleTxt}>{rule.ruleTxt}</option>
											))}
										</NativeSelect>
										<FormHelperText>Rule</FormHelperText>
									</Grid>
								</Grid>
							))
						}
						<br/>
						<hr/>
					</Grid>
					<Grid item id="send-quiz-button">
						<Button variant="contained" color="primary" onClick={this.makeQuiz.bind(this)}>Send Quiz</Button>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default withRouter(QuizGenerator);
