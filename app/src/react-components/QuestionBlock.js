import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';
import SimpleQuestionBody from "./SimpleQuestionBody";
import MorphologyQuestionBody from "./MorphologyQuestionBody";
import TextField from "@material-ui/core/TextField";
import {testUR} from "../actions/quiz";
import {Popover} from "@material-ui/core";

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
            genMoreCount: 0,
            customUR: '',
            customUrValid: true,
            convertedSR: '—',
            isIPAg: props.isIPAg,
            instPopoverOpen: false,
            anchorEl: null
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
            genMoreCount: 0,
            customUR: '',
            customUrValid: true,
            convertedSR: '—',
            isIPAg: this.props.isIPAg,
            instPopoverOpen: false,
            anchorEl: null
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

    onMoreData = (e) => {
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

    onHover = (e) => {
        this.setState({instPopoverOpen: true})
    }

    onHoverLeave = () => {
        this.setState({instPopoverOpen: false})
    }



    validateCustomUR = (phoneme_str, ruleName) => {
        let ur = this.state.customUR;
        if (phoneme_str.includes("ɡ") || phoneme_str.includes("g")){
            phoneme_str = phoneme_str.concat(" g ɡ");
        }
        let validity = true;
        const phoneme_list = phoneme_str.split(" ")
        let i = 0;
        while (i < ur.length){
            let end_loc = -1;
            let local_validity = false;
            for (let j = i + 1; j < ur.length + 1; j++){
                if ((ur.slice(i, j).length > 0) && (phoneme_list.includes(ur.slice(i, j)))){
                    end_loc = j;
                    local_validity = true;
                }
            }
            i = end_loc;
            if (local_validity === false){
                validity = false;
                break;
            }
        }

        if (validity === true){
            let ur = this.state.customUR.replaceAll('ɡ', 'g')
            testUR(this, ur, this.state.isIPAg, phoneme_str, ruleName)
        }else{
            this.setState({convertedSR: "N/A"})
        }
        this.setState({customUrValid: validity});
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
        const defaultHelper = "(Copy and paste the IPA symbols from the phoneme inventory.)"
        const invalidWarn = "(Your UR includes phones outside of the phoneme inventory; Try again.)"

        let bodyArgs;
        if (question.qType === "Simple") {
            const urs = [question.UR.slice(0, sp1), question.UR.slice(sp1, sp2), question.UR.slice(sp2, size)];
            const srs = [question.SR.slice(0, sp1), question.SR.slice(sp1, sp2), question.SR.slice(sp2, size)];
            const gls = [question.gloss.slice(0, sp1), question.gloss.slice(sp1, sp2),
                question.gloss.slice(sp2, question.gloss.length)];
            bodyArgs = {
                urs: urs,
                srs: srs,
                gls: gls,
                ipaG: this.state.isIPAg
            }
        } else if (question.qType === "Morphology") {
            const headerRow = question.header_row;
            const transPat = question.trans_patterns;
            const coreData = question.core_data;
            const gls = question.gloss;
            const urs = question.UR;
            bodyArgs = {
                urs: urs,
                gls: gls,
                headerRow: headerRow,
                transPat: transPat,
                coreData: coreData,
                ipaG: this.state.isIPAg
            }
        } else {
            console.error("ERROR UNIDENTIFIED QUESTION TYPE " + question.qType);
        }

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
                                                            onClick={this.onShowPhonemes}>{showPhoneme ? "Hide Phoneme Inventory" : "Show Phoneme Inventory"}</Button>
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
                                                    <Button onClick={this.onMoreData}>More Data</Button>
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
                                        {poi ? <Grid item>Phones of
                                            Interest: {poi.trim() === '' ? 'NA' : poi}</Grid> : null}
                                        {showPhoneme ? <Grid item>Phonemes: {phonemes}</Grid> : null}
                                        {showRuleType ? <Grid item>Rule Type: {ruleType}</Grid> : null}
                                        {showRuleFamily ? <Grid item>Rule Family: {ruleFamily}</Grid> : null}
                                        {showRule ? <Grid item>Rule: {ruleName}</Grid> : null}
                                    </Grid>
                                </Grid>
                                <Grid container
                                      direction="column"
                                      alignItems="center"
                                      justify = "center"
                                      id={"rule-test-box"}>
                                    <Grid container
                                          direction="row"
                                          justify="center"
                                          alignItems="center"
                                          spacing={3}
                                          id={"rule-test-main"}>
                                        {/*<Grid item>*/}

                                            {/*<Typography*/}
                                            {/*    //aria-owns={this.state.instPopoverOpen ? 'mouse-over-popover' : undefined}*/}
                                            {/*    aria-owns={this.state.instPopoverOpen ? 'mouse-over-popover':null}*/}
                                            {/*    aria-haspopup="true"*/}
                                            {/*    onMouseEnter= {this.onHover}*/}
                                            {/*    onMouseLeave= {this.onHoverLeave}*/}
                                            {/*> ?wefdssd*/}
                                            {/*</Typography>*/}

                                            {/*<Popover*/}
                                            {/*    id="mouse-over-popover"*/}
                                            {/*    sx={{*/}
                                            {/*      pointerEvents: 'none',*/}
                                            {/*    }}*/}
                                            {/*    open={this.state.instPopoverOpen}*/}
                                            {/*    anchorEl = {this.state.anchorEl}*/}
                                            {/*    anchorOrigin={{*/}
                                            {/*      vertical: 'bottom',*/}
                                            {/*      horizontal: 'left',*/}
                                            {/*    }}*/}
                                            {/*    transformOrigin={{*/}
                                            {/*      vertical: 'top',*/}
                                            {/*      horizontal: 'left',*/}
                                            {/*    }}*/}
                                            {/*    onClose= {this.onHoverLeave}*/}
                                            {/*    disableRestoreFocus*/}
                                            {/*  >*/}
                                        {/*        <Typography sx={{ p: 1 }}>I use Popover.</Typography>*/}
                                        {/*    </Popover>*/}
                                        {/*</Grid>*/}
                                        <Grid item><TextField id = {"ur-input-field"}
                                                              style = {{width: 200}}
                                                              value={this.state.customUR}
                                                              label="Custom UR"
                                                              error={this.state.customUrValid === false}
                                                              //helperText={this.state.customUrValid  === false ? invalidWarn : defaultHelper}
                                                              type="string"
                                                              variant="outlined"
                                                              InputLabelProps={{
                                                                  shrink: true
                                                              }}
                                                              onChange={event => this.setState(
                                                                  {customUR: event.target.value.replaceAll(" ","")})}
                                                    />
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="primary"
                                                onClick={()=>this.validateCustomUR(phonemes, ruleName)}>Test</Button>
                                        </Grid>
                                        <Grid item>
                                            <TextField id = {"ur-input-field"}
                                                       style = {{width: 200}}
                                                       label = "Converted SR"
                                                        type='text'
                                                        value= {this.state.convertedSR}
                                                        variant='outlined'
                                                        inputProps={
                                                            { readOnly: true,
                                                                style: { textAlign: 'center', color: "black"}}
                                                        }
                                                       InputLabelProps={{style: {color: "#001636"}}}
                                                       disabled

                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item
                                          style = {{color: "#001636", fontSize:11, fontWeight: "bold",
                                              fontFamily: "Helvetica Neue"}}
                                    >
                                        Test out your custom UR to see how the rule is applied.
                                    </Grid>
                                    <Grid item style={((this.state.customUrValid === false) ?
                                              {color: "red", fontSize:11, fontFamily: "Helvetica Neue"}:
                                              {color: "gray", fontSize:11, fontFamily: "Helvetica Neue"})}
                                          id={"rule-test-box"}>
                                        {this.state.customUrValid === false ? invalidWarn : defaultHelper}
                                    </Grid>

                                </Grid>


                            </Grid>
                        </Grid>

                        {
                            question.qType === "Simple" ?
                                <SimpleQuestionBody bodyArgs={bodyArgs} showUR={showUR}/> : null
                        }
                        {
                            question.qType === "Morphology" ?
                                <MorphologyQuestionBody bodyArgs={bodyArgs} showUR={showUR}/> : null
                        }
                    </Grid>
                </div>
            </ThemeProvider>
        );
    }
}
