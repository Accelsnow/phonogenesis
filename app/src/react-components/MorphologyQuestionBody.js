import React from "react";
import Grid from "@material-ui/core/Grid";
import {withRouter} from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import './mainstyle.css'

class MorphologyQuestionBody extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.bodyArgs === undefined || this.props.showUR === undefined) {
            console.log("ERROR NO QUESTION BODY ARG FOR SIMPLE QUESTION BODY COMPONENT");
        } else {
            const args = this.props.bodyArgs;
            if (args.urs === undefined || args.headerRow === undefined || args.gls === undefined || args.transPat === undefined || args.coreData === undefined) {
                console.error("ERROR MISSING FIELDS FOR SIMPLE QUESTION BODY COMPONENT")
            }
        }
    }

    render() {
        return (
            <Grid item>
                <TableContainer component={Paper}>
                    <Table aria-label="rule data table">
                        <TableHead>
                            <TableRow>
                                {this.props.showUR ?
                                    <TableCell align="center" className="table-header">root</TableCell> : null}

                                {this.props.bodyArgs.headerRow.map((header, i) => (
                                    <TableCell align="center" className="table-header" key={header}>{this.props.showUR ? `${header} (${this.props.bodyArgs.transPat[i]})` : header}</TableCell>
                                ))}
                                <TableCell align="center" className="table-header">gloss</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.bodyArgs.urs.map((urWord, i) => (
                                    <TableRow key={`${urWord}_${i}`}>
                                        {this.props.showUR ?
                                            <TableCell
                                                align="center"><span
                                                className="ipa-font-sensitive">{urWord}</span></TableCell> : null}
                                        {this.props.bodyArgs.coreData[i].map((data, j) => (
                                            <TableCell align="center" key={`${data}_${i}_${j}`}><span
                                                className="ipa-font-sensitive">{this.props.bodyArgs.coreData[i][j]}</span></TableCell>
                                        ))}
                                        <TableCell align="center"><span
                                            className="ipa-font-sensitive">{this.props.bodyArgs.gls[i]}</span></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        )
    }
}


export default withRouter(MorphologyQuestionBody);