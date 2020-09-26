import React from "react";
import ToolBar from "./ToolBar";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';
import {withRouter} from "react-router-dom";
import "./mainstyle.css"

class AdvancedGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            footerClass: "copyright-info abs-bottom",
        };
    }

    componentDidUpdate(prevProps, prevState, snap) {
        adjustFooter(this);
    };

    componentDidMount() {
        adjustFooter(this);
    }

    render() {
        return <ThemeProvider theme={theme}>
            <ToolBar history={this.props.history} app={this.props.app}/>
            <div className="main-area">
                <h1>This page is currently under construction</h1>
            </div>
            {footer(this)}
        </ThemeProvider>
    }

}


export default withRouter(AdvancedGenerator);
