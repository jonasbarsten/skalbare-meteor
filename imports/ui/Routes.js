import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

// import history from 'history';

// const browserHistory = history.createBrowserHistory();

// Public
// import Home from './containers/Home';
// import Login from './containers/Login';
// import SignUp from './containers/SignUp';
// import ResetPassword from './containers/ResetPassword';

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncLogin = asyncComponent(() => import("./containers/Login"));
const AsyncSignup = asyncComponent(() => import("./containers/SignUp"));
const AsyncResetPassword = asyncComponent(() => import("./containers/ResetPassword"));
const AsyncProfile = asyncComponent(() => import("./containers/Profile"));
const AsyncProfileCardList = asyncComponent(() => import("./containers/ProfileCardList"));
const AsyncNewsFeed = asyncComponent(() => import("./containers/NewsFeed"));
const AsyncChat = asyncComponent(() => import("./containers/Chat"));

// Secure
// import Profile from './containers/Profile';
// import ProfileCardList from './containers/ProfileCardList';

// AUTH LOGIC
// const authenticateSecure = (nextState, replace, callback) => {

// 	// If no user, send to login
// 	if (!Meteor.loggingIn() && !Meteor.userId()) {
// 		replace({
// 		  pathname: '/login',
// 			state: { nextPathname: nextState.location.pathname },
// 		});
// 	}
// 	callback();
// };


export default ({ childProps }) =>

  <Switch>
    <AuthenticatedRoute path="/" exact component={AsyncNewsFeed} props={childProps} title="NewsFeed" />
    
    <UnauthenticatedRoute path="/login" exact component={AsyncLogin} props={childProps} title="Login" />
    <UnauthenticatedRoute path="/signup" exact component={AsyncSignup} props={childProps} title="Signup" />

    <AuthenticatedRoute path="/login/reset" exact component={AsyncResetPassword} props={childProps} title="Reset" />
    <AuthenticatedRoute path="/members" exact component={AsyncProfileCardList} props={childProps} title="Folk" />
    <AuthenticatedRoute path="/profile/:id" component={AsyncProfile} props={childProps} title="Profil" />
    <AuthenticatedRoute path="/chat" exact component={AsyncChat} props={childProps} title="Chat" />

    {/*<AuthenticatedRoute path="/profile" exact component={AsyncProfile} props={childProps} />
    <AuthenticatedRoute path="/pay" exact component={AsyncPay} props={childProps} />
    <AuthenticatedRoute path="/registerProduct" exact component={AsyncRegisterProduct} props={childProps} />
		<AuthenticatedRoute path="/notes/new" exact component={AsyncNewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={AsyncNotes} props={childProps} /> */}
    { /* Finally, catch all unmatched routes */ }


  </Switch>

// export const Routes = () => (

//     <Switch>
//     	<Route exact path="/" component={Home}/>
//     </Switch>

// );

// export const renderRoutes = () => (
//   <Router history={browserHistory}>
//     <Switch>
//       <Route exact path="/" component={AppContainer}/>
//       <Route exact path="/lists/:id" component={ListPageContainer}/>
//       <Route exact path="/signin" component={AuthPageSignIn}/>
//       <Route exact path="/join" component={AuthPageJoin}/>
//       <Route component={NotFoundPage}/>
//     </Switch>
//   </Router>
// );