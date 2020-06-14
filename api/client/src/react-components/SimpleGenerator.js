import React from "react";

import QuestionBlock from "./QuestionBlock";
import TopBar from "./TopBar";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {FormGroup, Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "./SimpleGenerator.css"
import "./mainstyle.css"
import {getDistinctRuleList} from "../actions/quiz";


const QUESTION_SIZE_MIN = 15;
const QUESTION_SIZE_MAX = 40;

class SimpleGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRule: "Random",
			sizeSelectWarn: "",
			selectedSize: 15,
			selectedType: "Random",
			canChangeType: true,
			isShuffle: false,
			isIPAg: false,
			rule: null,
			genKey: 0,
			rules: null
		};
		getDistinctRuleList(this);
	}

	onGetQuestion = (e) => {
		if (this.state.sizeSelectWarn !== "") {
			alert("There is error in provided data!");
			return;
		}

		const ruleType = this.state.selectedType;
		const ruleTxt = this.state.selectedRule;
		const rules = this.state.rules;

		let rule;
		if (ruleTxt !== "Random") {
			rules.forEach(ruleIter => {
				if (ruleTxt === ruleIter.ruleTxt) {
					rule = ruleIter;
				}
			});
		} else if (ruleType !== "Random") {
			rules.forEach(ruleIter => {
				if (ruleType === ruleIter.ruleType) {
					rule = ruleIter;
				}
			});
		} else {
			rule = rules[Math.floor(Math.random() * rules.length)];
		}

		if (this.state.isShuffle) {
			for (let i = rule.UR.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[rule.UR[i], rule.UR[j]] = [rule.UR[j], rule.UR[i]];
				[rule.SR[i], rule.SR[j]] = [rule.SR[j], rule.SR[i]];
				[rule.gloss[i], rule.gloss[j]] = [rule.gloss[j], rule.gloss[i]];
			}
		}

		if (this.state.isIPAg) {
			for (let i = 0; i < rule.UR.length; i++) {
				rule.UR[i] = rule.UR[i].replace(/g/, "ɡ");
				rule.SR[i] = rule.SR[i].replace(/g/, "ɡ");
			}
			rule.poi = rule.poi.replace(/g/, "ɡ");
			rule.phoneme = rule.phoneme.replace(/g/, "ɡ");
			rule.ruleTxt = rule.ruleTxt.replace(/g/, "ɡ");
		} else {
			for (let i = 0; i < rule.UR.length; i++) {
				rule.UR[i] = rule.UR[i].replace(/ɡ/, "g");
				rule.SR[i] = rule.SR[i].replace(/ɡ/, "g");
			}
			rule.poi = rule.poi.replace(/ɡ/, "g");
			rule.phoneme = rule.phoneme.replace(/ɡ/, "g");
			rule.ruleTxt = rule.ruleTxt.replace(/ɡ/, "g");
		}

		this.setState({question: rule, genKey: this.state.genKey + 1});
		e.preventDefault();
	};

	onTypeChange = (e) => {
		this.setState({selectedType: e.target.value});
	};

	validateSizeSelection = (e) => {
		const selSize = Number(e.target.value);

		if (selSize < QUESTION_SIZE_MIN || selSize > QUESTION_SIZE_MAX) {
			this.setState({sizeSelectWarn: "out of range"});
		} else {
			this.setState({sizeSelectWarn: ""});
		}
	};

	onSizeChange = (e) => {
		this.setState({selectedSize: Number(e.target.value)});
	};

	onRuleChange = (e) => {
		const targetVal = e.target.value;
		this.setState({selectedRule: targetVal});

		if (targetVal !== "Random") {
			this.setState({canChangeType: false, selectedType: "Random"});
		} else {
			this.setState({canChangeType: true});
		}
	};

	onShuffleChange = () => {
		this.setState({isShuffle: !this.state.isShuffle});
	};

	onIPAgChange = () => {
		this.setState({isIPAg: !this.state.isIPAg});
	};

	render() {
		if (this.state.rules === null) {
			return <div/>
		}

		const isValidSize = this.state.sizeSelectWarn !== "";

		return (
			<div>
				<TopBar history={this.props.history} app={this.props.app}/>
				<Grid container direction="row" justify="center" alignItems="flex-start" spacing={4} id={"gen-form"}>
					<Grid item>
						<FormControl variant="outlined">
							<InputLabel id={"rule-sel-label"}>Rule</InputLabel>
							<Select value={this.state.selectedRule} labelId={"rule-sel-label"} label={"Rule"}
							        onChange={this.onRuleChange}>
								<MenuItem value={"Random"}>Random</MenuItem>
								{this.state.rules.sort((e1, e2) => {
									if (e1.ruleTxt > e2.ruleTxt) {
										return 1;
									} else if (e1.ruleTxt < e2.ruleTxt) {
										return -1;
									}
									return 0;
								}).map(rule => (
									<MenuItem value={rule.ruleTxt} key={rule.ruleTxt}>{rule.ruleTxt}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>

					<Grid item><TextField
						label="QuizData Size (15-30)"
						error={isValidSize}
						helperText={this.state.sizeSelectWarn}
						type="number"
						value={this.state.selectedSize}
						variant="outlined"
						InputLabelProps={{
							shrink: true,
						}}
						onChange={this.onSizeChange}
						onBlur={this.validateSizeSelection}
					/></Grid>

					<Grid item><FormControl variant="outlined" disabled={!this.state.canChangeType}>
						<InputLabel id="type-sel-label">Rule Type</InputLabel>
						<Select labelId="type-sel-label" id={"type-sel"} label={"Rule Type"}
						        value={this.state.selectedType} onChange={this.onTypeChange}>
							<MenuItem value={"Random"}>Random</MenuItem>
							<MenuItem value={"Alternating"}>Alternating</MenuItem>
							<MenuItem value={"Neutralizing"}>Neutralizing</MenuItem>
							<MenuItem value={"Mixed - Alternating & Neutralizing"}>Mixed -
								Alternating & Neutralizing</MenuItem>
						</Select>
					</FormControl></Grid>


					<Grid item><FormGroup id={"gen-switches"}>
						<FormControlLabel
							control={
								<Switch
									checked={this.state.isShuffle}
									onChange={this.onShuffleChange}
									color="primary"
								/>
							}
							label="Shuffle"
						/>
						<FormControlLabel
							control={
								<Switch
									checked={this.state.isIPAg}
									onChange={this.onIPAgChange}
									color="primary"
								/>
							}
							label="IPA [ɡ]"
						/>
					</FormGroup></Grid>

					<Grid item>
						<Button variant="contained" color="primary" onClick={this.onGetQuestion}>Generate
							Question</Button>
					</Grid>
				</Grid>

				<QuestionBlock instTxt={"Get QuizData"} rule={this.state.question}
				               qCount={this.state.selectedSize} isReadOnly={false} showAnswer={false} isQuiz={false}
				               canShowUR={true} canShowPhoneme={true} key={this.state.genKey}/>
			</div>
		);
	};
}

export default withRouter(SimpleGenerator);
