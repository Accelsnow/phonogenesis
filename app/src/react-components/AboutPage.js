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
                <h2>Phonogenesis instructions</h2>

                <h3>Settings for generating data</h3>

                Rules are categorized into <strong>families</strong> based on which general phonological process they
                involve. Most families involve local feature-changing, but there are also families for deletion,
                epenthesis, and harmony (non-local assimilation). The current set of available rule families are as
                follows ("weird" rules are local feature-changing rules that don't fit into other families):

                <ul>
                    <li>consonant devoicing</li>
                    <li>aspiration</li>
                    <li>lenition</li>
                    <li>vowel tenseness</li>
                    <li>palatalization</li>
                    <li>nasalization</li>
                    <li>vowel devoicing</li>
                    <li>consonant voicing</li>
                    <li>vowel height</li>
                    <li>CV assimilation</li>
                    <li>weird</li>
                    <li>deletion</li>
                    <li>epenthesis</li>
                    <li>harmony</li>
                </ul>

                <p>There are three <strong>rule types</strong> based on how the rule affects phonemic contrasts in
                    the language. A <strong>neutralizing</strong> rule in a rule that completely collapses an entire
                    phonemic contrast in some environment. For example, intervocalic voicing of the voiceless stops
                    /p t k/ would be a neutralizing rule in a language that also has a full matching set of phonemic
                    voiced stops /b d ɡ/, since the voicing contrast between /p t k/ and /b d ɡ/ is collapsed to [b
                    d ɡ] between vowels. This means that a surface voiced stop between vowels is ambiguous in
                    whether it comes from an underlying voiceless or voiced stop.</p>

                <p>An <strong>alternating</strong> rule in a rule that collapses no phonemic contrasts at all. For
                    example, the same rule of intervocalic voicing for the voiceless stops /p t k/ would be a
                    neutralizing rule in a language that lacks any of phonemic voiced stops /b d ɡ/, since surface
                    [b d ɡ] can only come from underlying /p t k/.</p>

                <p>A <strong>mixed</strong> rule is a rule that is neutralizing for some phonemes and alternating
                    for others. For example, the same rule of intervocalic voicing for the voiceless stops /p t k/
                    would be a mixed rule in a language that has a partial matching set of phonemic voiced stops /b
                    d/, but lacks /ɡ/. This rule behaves as a neutralizing rule with respect to /p t/ and /b d/ but
                    as an alternating rule with respect to /k/ (since there is no matching /ɡ/ for it to neutralize
                    with).</p>

                <p><strong>Size</strong> is the total amount of initial data you want to generate. There is an
                    option to get more data afterward, up to 50 words total.</p>

                <p>You can also select whether or not to <strong>shuffle</strong> the data randomly and whether or
                    not to use true <strong>IPA [ɡ]</strong> in the displayed data. By default, these options are
                    turned off, so the data will be listed in the order generated (which is generally grouped by
                    whether the rule has applied) and with non-IPA two-storey [g] (which can look the same in some
                    fonts).</p>

                <p>When you click the <strong>generate data</strong> button, a data set following these settings
                    will be displayed below with surface representations (<strong>SR</strong>)
                    and <strong>glosses</strong>, along with a list just above the data, containing the <strong>phones
                        of interest</strong>, which are the surface allophones relevant to the rule, including faithful
                    allophones of the targeted phonemes.</p>

                <p>The generated data contains a mixture of words, some in which the rule has applied, some in
                    which the environment and/or target are a close match for the rule but not close enough to
                    trigger the rule, and some which are filler that are not relevant to the rule.</p><br/>

                <h3>Hints for solving the problem</h3>

                <p>Once the data set is displayed, you can then click buttons to toggle various options to show and
                    hide different hints to the solution. <strong>Show phonemes</strong> displays all of the
                    phonemes in the language, whether they are relevant to the rule or not. <strong>Show
                        UR</strong> shows the underlying representations (UR) for each of the words. <strong>Show rule
                        family</strong> and <strong>show rule type</strong> display the rule family and rule type as
                    described above. Finally, <strong>show rule</strong> display a prose description of the actual
                    rule. Note that due to some aspects of the randomness in the data generation, it is possible
                    that a rule may not be derivable exactly as stated from the data. For example, data might be
                    selected for a rule of word-final obstruent devoicing that happen to only use stops at the end
                    of the word, so it would not be clear that the rule generalizes to all obstruents. However,
                    rules and data should always be compatible, never contradictory.</p>

                <p>If you need more data to solve the problem, you can generate more with the <strong>more
                    data</strong> button. This will generate an additional five words that all demonstrate
                    application of the rule (no filler here!). Phonogenesis will only allow for 50 total words in
                    the data set, so if you begin with a size of 30 words, you can click the more data button four
                    times, to get 20 more words, five at a time. These additional words are added to the end, but
                    the column sizes will readjust to be balanced. After you have reached the maximum, you will get
                    a warning message that no more data can be generated.</p><br/>

                <h2>Contributors</h2>
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
                    <li><b>Main Contributor: </b> <a href="https://sites.google.com/view/chaerin-song">Chaerin Song</a>, University of
                        Toronto Undergraduate Student &nbsp; - &nbsp; Extended implementation of UI and problem features
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
