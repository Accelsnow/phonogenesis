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
import {theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';

export default class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRule: props.showAnswer || false,
            showUR: false,
            showPhoneme: false,
            showRuleFamily: false,
            showRuleType: false,
            qCount: props.question.size,
            genMoreCount: 0
        };
    }

    resetState = () => {
        this.setState({
            showRule: this.props.showAnswer || false,
            showUR: false,
            showPhoneme: false,
            showRuleFamily: false,
            showRuleType: false,
            qCount: this.props.question.size,
            genMoreCount: 0
        });
    }

    onShowPhonemes = () => {
        this.setState({showPhoneme: !this.state.showPhoneme});
    };

    onShowUR = () => {
        this.setState({showUR: !this.state.showUR});
    };

    onShowRuleFamily = () => {
        this.setState({showRuleFamily: !this.state.showRuleFamily});
    }

    onShowRule = () => {
        this.setState({showRule: !this.state.showRule});
    }

    onShowRuleType = () => {
        this.setState({showRuleType: !this.state.showRuleType});
    }

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
        const showRule = this.props.showAns || this.state.showRule;
        const question = this.props.question;
        const readOnly = this.props.isReadOnly;
        const showPhoneme = this.state.showPhoneme;
        const showUR = this.state.showUR;
        const showRuleFamily = this.state.showRuleFamily;
        const showRuleType = this.state.showRuleType;

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
        const ruleFamily = question.rule_family;
        const canPhoneme = question.canPhoneme || this.props.simpleGen;
        const canUR = question.canUR || this.props.simpleGen;
        const canRule = !this.props.isQuiz || this.props.simpleGen;

        return (
            <ThemeProvider theme={theme}>
                <div className="question-block-container">
                    <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
                        <Grid item>
                            <Grid container direction={"column"} justify={"flex-start"} alignItems={"center"}
                                  spacing={8}>
                                {!readOnly ? (<Grid item id="helper-button-panel">
                                    <Grid container direction="row" justify="space-evenly" alignItems="center"
                                          spacing={3}>
                                        <Grid item>
                                            <ButtonGroup size="small" variant="outlined" color="secondary"
                                                         aria-label={"contained primary hint button group"}>
                                                {canPhoneme ? (
                                                    <Button variant={showPhoneme ? "contained" : "outlined"}
                                                            onClick={this.onShowPhonemes}>{showPhoneme ? "Hide Phoneme" : "Show Phoneme"}</Button>
                                                ) : null}
                                                {canUR ? (
                                                    <Button variant={showUR ? "contained" : "outlined"}
                                                            onClick={this.onShowUR}>{showUR ? "Hide UR" : "Show UR"}</Button>
                                                ) : null}

                                                <Button variant={showRuleFamily ? "contained" : "outlined"}
                                                        onClick={this.onShowRuleFamily}>{showRuleFamily ? "Hide Rule Family" : "Show Rule Family"}</Button>,
                                                <Button variant={showRuleType ? "contained" : "outlined"}
                                                        onClick={this.onShowRuleType}>{showRuleType ? "Hide Rule Type" : "Show Rule Type"}</Button>

                                                {canRule ? <Button variant={showRule ? "contained" : "outlined"}
                                                                   onClick={this.onShowRule}>{showRule ? "Hide Rule" : "Show Rule"}</Button> : null}
                                            </ButtonGroup>
                                        </Grid>

                                        <Grid item>
                                            {this.props.genMoreLimit === 0 ? null : (
                                                <ButtonGroup variant="contained" color="primary"
                                                             aria-label={"contained primary hint button group"}>
                                                    <Button onClick={this.onMoreCADT}>More CADT</Button>
                                                </ButtonGroup>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>) : null}

                                {this.props.showTemplate ? <Grid item>
                                    <Typography variant="h5">Templates: </Typography>
                                    <ul>
                                        {
                                            templates.map((template) => (
                                                <li key={template}>{template}</li>))
                                        }
                                    </ul>
                                </Grid> : null}

                                <Grid item>
                                    <Grid container direction={"column"} justify={"center"} alignItems={"center"}
                                          spacing={1}>
                                        <Grid item>Phones of Interest: {poi.trim() === '' ? 'NA' : poi}</Grid>
                                        {showPhoneme ? <Grid item>Phonemes: {phonemes}</Grid> : null}
                                        {showRuleType ? <Grid item>Rule Type: {ruleType}</Grid> : null}
                                        {showRuleFamily ? <Grid item>Rule Family: {ruleFamily}</Grid> : null}
                                        {showRule ? <Grid item>Rule: {ruleName}</Grid> : null}
                                    </Grid>
                                </Grid>

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
                                                        {showUR ?
                                                            <TableCell align="center" className="table-header"><span
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
            </ThemeProvider>
        );
    }
}
