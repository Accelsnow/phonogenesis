import React from "react";

import QuestionBlock from "./QuestionBlock";
import TopBar from "./TopBar";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {FormGroup, ListSubheader, Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "./SimpleGenerator.css"
import "./mainstyle.css"
import {genSimpleQuestion, getDistinctRuleList} from "../actions/quiz";


const QUESTION_SIZE_MIN = 15;
const QUESTION_SIZE_MAX = 40;

class SimpleGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRuleName: "Random",
            sizeSelectWarn: "",
            selectedSize: 15,
            selectedType: "Random",
            canChangeRule: true,
            canChangeType: true,
            isShuffle: false,
            isIPAg: false,
            rules: null,
            question: null
        };
        getDistinctRuleList(this);
        this.questionBlockElement = React.createRef();
    }

    onGetQuestion = () => {
        if (this.state.sizeSelectWarn !== "") {
            alert("Invalid size!");
            return;
        }

        genSimpleQuestion(this, this.state.isShuffle, this.state.isIPAg, this.state.selectedSize,
            this.state.selectedType, this.state.selectedRuleName);

        if (this.questionBlockElement.current) {
            this.questionBlockElement.current.resetState();
        }

        this.forceUpdate();
    };

    onTypeChange = (e) => {
        const targetVal = e.target.value;
        this.setState({selectedType: targetVal});

        if (targetVal !== "Random") {
            this.setState({canChangeRule: false, selectedRuleName: "Random"});
        } else {
            this.setState({canChangeRule: true});
        }
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
        this.setState({selectedRuleName: targetVal});

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
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} id={"gen-form"}>
                    <Grid item><FormControl variant="outlined" id={"rule-select-form"}>
                        <InputLabel id={"rule-sel-label"}>Rule</InputLabel>
                        <Select labelId="type-sel-label" label={"Rule"} onChange={this.onRuleChange.bind(this)}
                                value={this.state.selectedRuleName} id={"rule-select"}
                                disabled={!this.state.canChangeRule}>
                            <MenuItem value={"Random"}>Random</MenuItem>
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
                    </FormControl>
                    </Grid>


                    <Grid item><TextField id={"size-input-field"}
                                          label="Size(15-30)"
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
                            <MenuItem value={"Mixed"}>Mixed -
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

                {this.state.question ?
                    <QuestionBlock ref={this.questionBlockElement} question={this.state.question} isReadOnly={false}
                                   showAnswer={false} isQuiz={false}/> : null}
            </div>
        );
    };
}

export default withRouter(SimpleGenerator);
