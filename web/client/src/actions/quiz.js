import {broadcastMessage} from "./group";
import {readCookie} from "./user";

const axios = require('axios');
axios.defaults.withCredentials = true;
const SERVER_URL = "http://127.0.0.1:5000"

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

// DELETE THIS
export const getUserQuizzes = (page, username) => {
    axios.get(`${SERVER_URL}/quiz/user/${username}`).then(res => {
        page.setState({quizzes: res.data});
    }).catch(err => {
        console.log(err);
    });
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

export const getStudentQuizObj = (page, groupName, quizName) => {
    axios.get(`${SERVER_URL}/groups//get/${groupName}`).then(res => {
        const studentQuizObjs = [];
        const students = res.data;
        students.forEach(student => {
            student.quizzes.forEach(quiz => {
                if (quiz.name === quizName) {
                    if (quiz.pastResult) {
                        const newStudentQuizObj = {
                            name: student.name,
                            email: student.email,
                            username: student.username,
                            group: groupName,
                            score: `${quiz.pastResult.score}/${quiz.questions.length}`,
                            timeStamp: quiz.pastResult.timeStamp,
                            quiz: quiz
                        };
                        studentQuizObjs.push(newStudentQuizObj);
                    } else {
                        const newStudentQuizObj = {
                            name: student.name,
                            email: student.email,
                            username: student.username,
                            group: groupName,
                            score: "Not Completed",
                            timeStamp: "Not Completed",
                            quiz: null
                        };
                        studentQuizObjs.push(newStudentQuizObj);
                    }
                }
            })
        });
        page.setState({studentQuizObj: studentQuizObjs});
    }).catch(error => {
        console.log(error);
    })
};

