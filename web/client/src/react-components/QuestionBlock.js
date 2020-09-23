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

export default class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAns: props.showAnswer || false,
            showUR: false,
            showPhoneme: false,
            qCount: props.question.size,
            genMoreCount: 0
        };
    }

    resetState = () => {
        this.setState({
            showAns: this.props.showAnswer || false,
            showUR: false,
            showPhoneme: false,
            qCount: this.props.question.size,
            genMoreCount: 0
        });
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
        const question = this.props.question;
        const newGenMoreCt = this.state.genMoreCount + 1;
        const capacity = question.UR.length;

        if (newGenMoreCt > question.maxCADT || capacity - this.state.qCount - 5 < 0) {
            alert("You've reach maximum allowance to generate more instances for this rule!");
        } else {
            this.setState({genMoreCount: newGenMoreCt});
            this.setState({qCount: this.state.qCount + 5});
        }

        e.preventDefault();
    };

    render() {
        if (!this.props.question) {
            return (<br/>);
        }
        const showAns = this.props.showAns || this.state.showAns;
        const question = this.props.question;
        const readOnly = this.props.isReadOnly;
        const showUR = this.state.showUR;
        const showPhoneme = this.state.showPhoneme;

        const size = Math.min(this.state.qCount, question.UR.length);
        const templates = question.templates;
        const sp1 = size / 3;
        const sp2 = size / 3 * 2;
        const urs = [question.UR.slice(0, sp1), question.UR.slice(sp1, sp2), question.UR.slice(sp2, size)];
        const srs = [question.SR.slice(0, sp1), question.SR.slice(sp1, sp2), question.SR.slice(sp2, size)];
        const gls = [question.gloss.slice(0, sp1), question.gloss.slice(sp1, sp2),
            question.gloss.slice(sp2, question.gloss.length)];
        const ruleName = question.rule_name;
        const phonemes = question.phonemes;
        const poi = question.poi;
        const ruleType = question.rule_type;
        const ruleContent = question.rule_content;
        const canPhoneme = question.canPhoneme;
        const canUR = question.canUR;

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

                            {showAns ? ([<Grid item key={"rule-name-reveal"}>Rule: {ruleName}</Grid>,
                                <Grid item key={"rule-content-reveal"}>Expr: {ruleContent}</Grid>]) : null}
                            {showPhoneme ? (<Grid item>Phonemes: {phonemes}</Grid>) : null}
                            <Grid item>Phones of Interest: {poi}</Grid>
                            <Grid item>Rule Type: {ruleType} &nbsp;&nbsp; Count: {this.state.qCount}</Grid>

                            {!readOnly ? (<Grid item id="helper-button-panel">
                                <Grid container direction={"row"} justify="flex-start" alignItems={"center"}
                                      spacing={7}>
                                    <Grid item>
                                        <Grid container direction="column" justify="space-evenly"
                                              alignItems="center"
                                              spacing={3}>
                                            <Grid item>
                                                <ButtonGroup variant="outlined" color="secondary"
                                                             aria-label={"contained primary hint button group"}>
                                                    {canPhoneme ? (
                                                        <Button onClick={this.onGetPhonemes}>Get Phonemes</Button>
                                                    ) : null}
                                                    {canUR ? (
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
