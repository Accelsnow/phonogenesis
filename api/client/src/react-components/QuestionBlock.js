import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//  instTxt, rule, isReadOnly, showAnswer, genMoreLimit, isQuiz, canShowUR, canShowPhoneme
export default class QuestionBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showAns: props.showAnswer || false,
			showUR: false,
			showPhoneme: false,
			qCount: props.qCount,
			genMoreCount: 0
		};
	}

	onShowAnswer = (e) => {
		this.setState({showAns: true});
		this.setState({showUR: true});
		this.setState({showPhoneme: true});
		e.preventDefault();
	};

	onGetPhonemes = (e) => {
		this.setState({showPhoneme: true});
		e.preventDefault();
	};

	onGetUR = (e) => {
		this.setState({showUR: true});
		e.preventDefault();
	};

	onMoreCADT = (e) => {
		const newGenMoreCt = this.state.genMoreCount + 1;
		const capacity = this.props.rule.UR.length;

		if (newGenMoreCt > this.props.genMoreLimit || capacity - this.state.qCount - 5 < 0) {
			alert("You've reach maximum allowance to generate more instances for this rule!");
		} else {
			this.setState({genMoreCount: newGenMoreCt});
			this.setState({qCount: this.state.qCount + 5});
		}

		e.preventDefault();
	};

	render() {
		if (!this.props.rule) {
			return (<br/>);
		}

		const showUR = this.state.showUR;
		const showAns = this.props.showAnswer || this.state.showAns;
		const showPhoneme = this.state.showPhoneme;
		const rule = this.props.rule;
		const endIndex = Math.min(this.state.qCount, rule.UR.length);
		const templates = rule.templates;
		const sp1 = endIndex / 3;
		const sp2 = endIndex / 3 * 2;
		const urs = [rule.UR.slice(0, sp1), rule.UR.slice(sp1, sp2), rule.UR.slice(sp2, endIndex)];
		const srs = [rule.SR.slice(0, sp1), rule.SR.slice(sp1, sp2), rule.SR.slice(sp2, endIndex)];
		const gls = [rule.gloss.slice(0, sp1), rule.gloss.slice(sp1, sp2),
			rule.gloss.slice(sp2, rule.gloss.length)];

		return (
			<div className="question-block-container">
				<Grid container direction="row" justify="center" alignItems="center" spacing={7}>
					<Grid item>
						<Grid container direction={"column"} justify={"flex-start"} alignItems={"center"}
						      spacing={2}>

							<Grid item>
								<Typography variant="h5">Templates: </Typography>
								<ul>
									{
										templates.map((template) => (
											<li key={template}>{template}</li>))
									}
								</ul>
							</Grid>

							{showAns ? (<Grid item>Rule: {rule.ruleTxt}</Grid>) : null}
							{showPhoneme ? (<Grid item>Phonemes: {rule.phoneme}</Grid>) : null}
							<Grid item>Phones of Interest: {rule.poi}</Grid>
							<Grid item>Rule Type: {rule.ruleType} &nbsp;&nbsp; Count: {this.state.qCount}</Grid>

							{!this.props.isReadOnly ? (<Grid item id="helper-button-panel">
								<Grid container direction={"row"} justify="flex-start" alignItems={"center"}
								      spacing={7}>
									<Grid item>
										<Grid container direction="column" justify="space-evenly"
										      alignItems="center"
										      spacing={3}>
											<Grid item>
												<ButtonGroup variant="outlined" color="secondary"
												             aria-label={"contained primary hint button group"}>
													{this.props.canShowPhoneme ? (
														<Button onClick={this.onGetPhonemes}>Get Phonemes</Button>
													) : null}
													{this.props.canShowUR ? (
														<Button onClick={this.onGetUR}>Get UR</Button>
													) : null}
												</ButtonGroup>
											</Grid>

											<Grid item>
												{this.props.genMoreLimit === 0 ? null : (
													<ButtonGroup variant="outlined" color="secondary"
													             aria-label={"contained primary hint button group"}>
														<Button onClick={this.onMoreCADT}>More CADT</Button>
													</ButtonGroup>
												)}
											</Grid>
										</Grid>
									</Grid>

									{this.props.isQuiz ? null : (
										<Grid item>
											<Button variant="contained" color="primary" onClick={this.onShowAnswer}>
												Show Answer</Button>
										</Grid>
									)}
								</Grid>
							</Grid>) : null}
						</Grid>
					</Grid>

					<Grid item>
						<Grid container direction={"row"} justify="space-evenly" spacing={4}>

							{[0, 1, 2].map((index) => (
								<Grid item key={index}>
									<TableContainer component={Paper}>
										<Table aria-label="rule data table" className="question-table">
											<TableHead>
												<TableRow>
													{showUR ? <TableCell align="center" className="table-header"><span
														className="ipa-font-sensitive">UR</span></TableCell> : null}
													<TableCell align="center" className="table-header"><span
														className="ipa-font-sensitive">SR</span></TableCell>
													<TableCell align="center" className="table-header"><span
														className="ipa-font-sensitive">Gloss</span></TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{
													urs[index].map((urWord, i) => (
														<TableRow key={urWord}>
															{showUR ?
																<TableCell
																	align="center"><span
																	className="ipa-font-sensitive">{urWord}</span></TableCell> : null}
															<TableCell align="center"><span
																className="ipa-font-sensitive">{srs[index][i]}</span></TableCell>
															<TableCell align="center"><span
																className="ipa-font-sensitive">{gls[index][i]}</span></TableCell>
														</TableRow>
													))
												}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
