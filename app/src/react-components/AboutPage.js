import React from "react";
import ToolBar from "./ToolBar";
import {adjustFooter, footer, theme} from "../App";
import {ThemeProvider} from '@material-ui/styles';
import {withRouter} from "react-router-dom";
import "./mainstyle.css"
import "./AboutPage.css"

class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            footerClass: "copyright-info abs-bottom"
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
                <h2>About Phonogenesis</h2>
                <p className={"intro-text"}>Phonogenesis is an online tool for constructing novel phonological data.
                    Reference the contributor list below for project contributors. Development of this project was
                    funded by an AdvancedTeaching and Learning in Arts & Science grant from the University of Toronto
                    Faculty of Arts & Science.

                    Phonogenesis can be used to construct random phonological data that follow one or more rules. The
                    basic version of <a href="https://accelsnow.com">Phonogenesis</a> creates a single block of data
                    that follows one hidden rule, allowing you to practice solving phonology problems. There is some
                    customization available, and pieces of the solution can be selectively revealed or hidden to provide
                    clues to the solution or to check your answer. The <a href="https://accelsnow.com/advanced">advanced
                        version</a> is still under development. It will for greater control over the construction of the
                    data, including selecting specific rules, changing the word templates, and creating more complex
                    datasets with multiple rules and rule interactions.</p>
                <br/>

                <h3>Contributors</h3>
                <ul>
                    <li><b>Main Contributor: </b> <a href="http://sanders.phonologist.org">Nathan Sanders</a>,
                        University of Toronto Linguistic Professor &nbsp; - &nbsp; Project founder, academic support,
                        linguistic data provider.
                    </li>
                    <li><b>Main Contributor: </b> <a href="http://www.jurgec.net/">Peter Jurgec</a>, University of
                        Toronto Linguistic Professor &nbsp; - &nbsp; Project founder, academic support,
                        linguistic data provider.
                    </li>
                    <li><b>Main Contributor: </b> <a href="https://github.com/Accelsnow">Junan Zhao</a>, University of
                        Toronto Undergraduate Student &nbsp; - &nbsp; Main project implementation and deployment,
                        technical support
                    </li>
                    <li><b>Main Contributor: </b> Samuel McCulloch, University of Toronto Student &nbsp; - &nbsp;
                        Initial insights and groundwork.
                    </li>
                    <li><b>Honorable Mention: </b> <a href="https://github.com/Altair59">Youhai Li</a>, University of
                        Toronto Undergraduate Student &nbsp; - &nbsp; React page implementation assistant
                    </li>
                    <li><b>Honorable Mention: </b> <a href="https://github.com/joshhan619">Joshua Han</a>, University of
                        Toronto Undergraduate Student &nbsp; - &nbsp; React login and page history management assistant
                    </li>
                </ul>
                <br/>
                <h3>Technological Details</h3>
                <p>The phonogenesis website is built with <a href="https://reactjs.org/">ReactJS</a> (frontend) and
                    python3 <a href="https://flask.palletsprojects.com/en/1.1.x/">flask</a> (backend). The website
                    source code repository is publicly available via <a
                        href="https://github.com/Accelsnow/phonogenesis">github</a>.
                </p>
            </div>
            {footer(this)}
        </ThemeProvider>
    }
}


export default withRouter(AboutPage);
