import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import ToolBar from "./ToolBar";
import "./WelcomePage.css"
import SimpleGenerator from "./SimpleGenerator";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';
import {withRouter} from "react-router-dom";


class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            footerClass: "copyright-info abs-bottom"
        };
    }

    onClickAbout = (e) => {
        this.props.history.push('/about');
        e.preventDefault();
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
                {/*<div id="intro">*/}
                {/*    <Card variant="outlined" id={"intro-card"}>*/}
                {/*        <CardContent>*/}
                {/*            <Typography color="textSecondary" gutterBottom>*/}
                {/*                About phonogenesis*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="body2" component="p">*/}
                {/*                Phonogenesis is an online tool for constructing novel phonological data.*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*        <CardActions>*/}
                {/*            <Button size="small" onClick={this.onClickAbout}>Learn More</Button>*/}
                {/*        </CardActions>*/}
                {/*    </Card>*/}
                {/*</div>*/}
                <div id="gen-panel"><SimpleGenerator history={this.props.history} app={this.props.app}
                                                     isInnerComp={true}/></div>

                {footer(this)}
            </ThemeProvider>
        );
    }
}


export default withRouter(WelcomePage);
