import {broadcastMessage} from "./group";
import {readCookie} from "./user";

const axios = require('axios');
axios.defaults.withCredentials = true;

export const registerPastResult = (pastResult, username, quizName, app) => {
	axios.post("http://127.0.0.1:9000/quiz/register", {
		username: username,
		quizName: quizName,
		pastResult: pastResult
	}).then(res => {
		app.setState({currentUser: res.data});
	}).catch(err => {
		console.log(err);
	});
};

export const getUserQuizzes = (page, username) => {
	axios.get(`http://127.0.0.1:9000/quiz/user/${username}`).then(res => {
		page.setState({quizzes: res.data});
	}).catch(err => {
		console.log(err);
	});
};

export const getDistinctRuleList = (page) => {
	axios.get("http://127.0.0.1:9000/quiz/rule").then(res => {
		const ruleTxtList = [];
		const ruleList = [];
		res.data.forEach(ruleObj => {
			if (!ruleTxtList.includes(ruleObj.ruleTxt)){
				ruleTxtList.push(ruleObj.ruleTxt);
				ruleList.push(ruleObj);
			}
		});
		page.setState({rules: ruleList});
	}).catch(error => {
		console.log(error);
	});
};

export const distributeQuiz = (page, quizObj) => {
	axios.post("http://127.0.0.1:9000/quiz/makeQuiz", {
		timeLim: quizObj.timeLim,
		name: quizObj.name,
		owner: quizObj.owner,
		pastResult: quizObj.pastResult,
		questions: quizObj.questions,
		group: quizObj.group
	}).then(res => {
		if (res.data.result !== true) {
			alert("Failed to distribute quiz. Quiz must have unique name.");
		} else {
			alert("Quiz created and sent to all students in the group!");
			broadcastMessage(page.props.app, quizObj.group, `Professor ${page.props.app.state.currentUser.name}
			(${page.props.app.state.currentUser.username}) from group ${quizObj.group} 
			has created a quiz named ${quizObj.name}`);
			readCookie(page.props.app);
		}
	}).catch(error => {
		console.log(error);
	});
};

export const getStudentQuizObj = (page, groupName, quizName) => {
	axios.get(`http://127.0.0.1:9000/groups//get/${groupName}`).then(res => {
		const studentQuizObjs = [];
		const students = res.data;
		students.forEach(student => {
			student.quizzes.forEach(quiz => {
				if (quiz.name === quizName){
					if (quiz.pastResult){
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

