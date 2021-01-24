import React from "react";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {withRouter} from "react-router-dom";

// showUR, urs, srs, gls
class SimpleQuestionBody extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.bodyArgs === undefined || this.props.showUR === undefined) {
            console.log("ERROR NO QUESTION BODY ARG FOR SIMPLE QUESTION BODY COMPONENT");
        } else {
            const args = this.props.bodyArgs;

            if (args.urs === undefined || args.srs === undefined || args.gls === undefined) {
                console.error("ERROR MISSING FIELDS FOR SIMPLE QUESTION BODY COMPONENT")
            }
        }
    }

    render() {
        return (
            <Grid item>
                <Grid container direction={"row"} justify="space-evenly" spacing={4}>

                    {[0, 1, 2].map((index) => (
                        <Grid item key={index}>
                            <TableContainer component={Paper}>
                                <Table aria-label="rule data table" className="question-table">
                                    <TableHead>
                                        <TableRow>
                                            {this.props.showUR ?
                                                <TableCell align="center" className="table-header"><span
                                                    className="ipa-font-sensitive">UR</span></TableCell> : null}

                                            <TableCell align="center" className="table-header"><span
                                                className="ipa-font-sensitive">SR</span></TableCell>
                                            <TableCell align="center" className="table-header"><span
                                                className="ipa-font-sensitive">gloss</span></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.props.bodyArgs.urs[index].map((urWord, i) => (
                                                <TableRow key={urWord}>
                                                    {this.props.showUR ?
                                                        <TableCell
                                                            align="center"><span
                                                            className="ipa-font-sensitive">{urWord}</span></TableCell> : null}
                                                    <TableCell align="center"><span
                                                        className="ipa-font-sensitive">{this.props.bodyArgs.srs[index][i]}</span></TableCell>
                                                    <TableCell align="center"><span
                                                        className="ipa-font-sensitive">{this.props.bodyArgs.gls[index][i]}</span></TableCell>
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
        )
    }
}


export default withRouter(SimpleQuestionBody);