import React from "react";

import TextField from "@material-ui/core/TextField";
import ToolBar from "./ToolBar.js"
import {withRouter} from "react-router-dom"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import {distributeQuiz, getDistinctRuleList} from "../actions/quiz";
import "./QuizGenerator.css";
import "./mainstyle.css"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {ListSubheader, Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';


class QuizGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footerClass: "copyright-info abs-bottom",
            timeErr: "",
            qCount: 0,
            rules: null,
            selectedGroup: ""
        };
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

        const qList = [];
        for (let i = 0; i < this.state.qCount; i++) {
            const canUR = document.getElementById("ur-check-".concat(i.toString())).checked;
            const canPhoneme = document.getElementById("phoneme-check-".concat(i.toString())).checked;
            const maxCADT = document.getElementById("max-cadt-sel-".concat(i.toString())).value;
            const ruleTxt = document.getElementById("rule-sel-".concat(i.toString())).textContent;

            if (ruleTxt.length <= 1 || ruleTxt.trim().length <= 1) {
                alert("Each question must be assigned a specific rule!");
                return;
            }

            const newQuestion = {
                rule: ruleTxt,
                size: 20,
                canUR: canUR,
                canPhoneme: canPhoneme,
                maxCADT: maxCADT
            };
            qList.push(newQuestion);
        }

        const quizName = document.getElementById("quiz-name").value;

        const success = distributeQuiz(this, {
            timeLim: quizTime,
            name: quizName,
            groupName: targetGroup,
            owner: this.props.app.state.currentUser,
            questions: qList
        });


        if (success) {
            this.setState({qCount: 0});
            document.getElementById("quiz-name").value = "";
            document.getElementById("quiz-time").value = 0;
        }
        this.forceUpdate();
    };

    createQuestionBlock = () => {
        this.setState({qCount: this.state.qCount + 1});
    };

    onGroupSelectChange = (event) => {
        this.setState({selectedGroup: event.target.value});
    };

    componentDidUpdate(prevProps, prevState, snap) {
        adjustFooter(this);
    };

    componentDidMount() {
        adjustFooter(this);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <ToolBar history={this.props.history} app={this.props.app}/>
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
                                           label="Time Limit (in seconds)" defaultValue={"600"}
                                           error={this.state.timeErr !== ""} helperText={this.state.timeErr}/>
                            </Grid>
                            <Grid item>
                                <FormControl variant="outlined">
                                    <InputLabel id="group-sel-label">Group</InputLabel>
                                    <Select value={this.state.selectedGroup} label="group" id="group-sel"
                                            labelId={"group-sel-label"} onChange={this.onGroupSelectChange}>
                                        {this.props.app.state.currentUser.owned_groups.map((group) => (
                                            <MenuItem value={group.name} key={group.id}>{group.name}</MenuItem>
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
                                <Grid container spacing={4} direction="row" id="add-question-body" key={i}
                                      justify="center"
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
                                        <Select defaultValue={this.state.rules[0].name || ""}
                                                id={"rule-sel-".concat(i.toString())}>
                                            {this.state.rules.map((rule, index) => {
                                                if (index === 0 || this.state.rules[index - 1].family !== rule.family) {
                                                    return [<ListSubheader disableSticky={true}
                                                                           key={rule.family}>{rule.family}</ListSubheader>,
                                                        <MenuItem key={rule.name.concat(rule.family)}
                                                                  value={rule.name}>{rule.name}</MenuItem>];
                                                } else {
                                                    return (<MenuItem key={rule.name.concat(rule.family)}
                                                                      value={rule.name}>{rule.name}</MenuItem>);
                                                }
                                            })}
                                        </Select>
                                        <FormHelperText>Rule</FormHelperText>
                                    </Grid>
                                </Grid>
                            ))
                        }
                        <br/>
                        <hr/>
                    </Grid>
                    <Grid item id="send-quiz-button">
                        <Button variant="contained" color="primary" onClick={this.makeQuiz.bind(this)}>Send
                            Quiz</Button>
                    </Grid>
                </Grid>
                {footer(this)}
            </ThemeProvider>
        )
    }
}

export default withRouter(QuizGenerator);
