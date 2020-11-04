import {broadcastMessage} from "./group";
import {readCookie, SERVER_URL} from "./user";

const axios = require('axios');
axios.defaults.withCredentials = true;

export const registerResult = (result, user, quiz, page) => {
    axios.post(`${SERVER_URL}/quiz/register`, {
        userid: user.id,
        quizid: quiz.id,
        result: result
    }).then(res => {
        if (res.data.success) {
            readCookie(page.props.app);
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        console.log(err);
    });
};


export const getRuleFamilies = (page) => {
    axios.get(`${SERVER_URL}/rule/families`).then(res => {
        page.setState({rule_families: res.data.families});
    }).catch(err => {
        console.log(err);
    })
};


export const getDistinctRuleList = (page) => {
    axios.get(`${SERVER_URL}/rules`).then(res => {
        const sorted_rules = Object.values(res.data.rules).sort((e1, e2) => {
            if (e1.family === e2.family) {
                if (e1.name > e2.name) {
                    return 1;
                } else if (e1.name < e2.name) {
                    return -1;
                }
                return 0;
            } else if (e1.family > e2.family) {
                return 1;
            }
            return -1;
        });
        page.setState({rules: sorted_rules});
    }).catch(error => {
        console.log(error);
    });
};

export const distributeQuiz = (page, quizObj) => {
    axios.post(`${SERVER_URL}/makequiz`, {
        timeLim: quizObj.timeLim,
        name: quizObj.name,
        ownerid: quizObj.owner.id,
        questions: quizObj.questions,
        groupName: quizObj.groupName
    }).then(res => {
        if (res.data.success) {
            alert("Quiz created and sent to all students in the group!");
            broadcastMessage(page.props.app, quizObj.groupName,
                `Professor ${page.props.app.state.currentUser.name}
			(${page.props.app.state.currentUser.username}) from group ${quizObj.groupName} 
			has created a quiz named ${quizObj.name}`, true);
            return true;
        } else {
            alert(res.data.message);
            return false;
        }
    }).catch(error => {
        console.log(error);
    });
};

export const genSimpleQuestion = (page, isShuffle, isIPAg, size, type, ruleFamily, updateFunction) => {
    axios.post(`${SERVER_URL}/question`, {
        shuffle: isShuffle,
        isIPAg: isIPAg,
        size: size,
        type: type,
        rule_family: ruleFamily
    }).then(res => {
        if (res.data.success) {
            page.setState({question: res.data.question, isWaitingResponse: false}, updateFunction);
            readCookie(page.props.app);
        } else {
            alert(res.data.message);
        }
    }).catch(error => {
        console.log(error);
    });
};

