import React from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';

import LoginPage from './react-components/LoginPage';
import AdminPage from './react-components/AdminPage';
import GroupsPage from './react-components/ProfGroupPage';
import SimpleGenerator from './react-components/SimpleGenerator';
import QuizGenerator from './react-components/QuizGenerator';
import StudentHome from './react-components/StudentHome';
import QuizTaker from './react-components/QuizTaker';
import ProfessorHome from "./react-components/ProfessorHome";
import StudentGroupPage from "./react-components/StudentGroupPage"
import SignUp from "./react-components/SignUp"
import {readCookie} from "./actions/user";
import StudentQuizzes from "./react-components/StudentQuizzes";
import ProfessorCheckQuiz from "./react-components/ProfessorCheckQuiz";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		readCookie(this);
	}

	render() {
		const {currentUser} = this.state;
		if (currentUser === undefined) {
			return <div/>
		}

		return (
			<BrowserRouter>
				<React.Fragment>
					{!currentUser ? (<Switch>
							<Route exact path={['/', '/login']}
							       render={({history}) => (<LoginPage history={history} app={this}/>)}/>
							<Route exact path='/signup' render={({history}) => (
								<SignUp history={history} app={this}/>)}/>
							<Route render={({history}) => {
								alert("Access Denied! Redirected back to login page.");
								history.push('/login');
								return <LoginPage history={history} app={this}/>
							}}/></Switch>) :
						(currentUser.type === 'admin' ?
								(<Switch>
									<Route exact path={['/', '/admin', '/login']}
									       render={({history}) => (<AdminPage history={history} app={this}/>)}/>
									<Route render={({history}) => {
										alert("Access Denied! Redirected back to admin main page.");
										return <AdminPage history={history} app={this}/>
									}}/></Switch>) :
								(currentUser.type === 'student' ?
										(<Switch>
											<Route exact path={['/student', '/', '/login']} render={({history}) => (
												<StudentHome history={history} app={this}/>)}/>
											<Route exact path='/student/gen' render={({history}) => (
												<SimpleGenerator history={history} app={this}/>)}/>
											<Route exact path='/quiztaker' render={({history}) => (
												<QuizTaker history={history} app={this}/>)}/>
											<Route exact path='/student/checkquiz' render={({history}) => (
												<StudentQuizzes history={history} app={this}/>)}/>
											<Route exact path='/student/groups' render={({history}) => (
												<StudentGroupPage history={history} app={this}/>)}/>
											<Route render={({history}) => {
												alert("Access Denied! Redirected back to student main page.");
												return <StudentHome history={history} app={this}/>
											}}/>
										</Switch>)
										:
										(currentUser.type === 'professor' ? (<Switch>
												<Route exact path={['/professor', '/', '/login']}
												       render={({history}) => (
													       <ProfessorHome history={history} app={this}/>)}/>
												<Route exact path='/professor/groups' render={({history}) => (
													<GroupsPage history={history} app={this}/>)}/>
												<Route exact path='/professor/makequiz' render={({history}) => (
													<QuizGenerator history={history} app={this}/>)}/>
												<Route exact path='/professor/quizresult' render={({history}) => (
													<ProfessorCheckQuiz history={history} app={this}/>)}/>
												<Route exact path='/quiztaker' render={({history}) => (
													<QuizTaker history={history} app={this}/>)}/>
												<Route render={({history}) => {
													alert("Access Denied! Redirected back to professor main page.");
													return <ProfessorHome history={history} app={this}/>
												}}/>
											</Switch>) : (
												<Route exact path='/login' render={({history}) => {
													alert("Invalid user type! Redirecting to login page.");
													return <LoginPage redir={true} history={history}
													                  app={this}/>
												}}/>
											)
										)


								)
						)
					}
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
