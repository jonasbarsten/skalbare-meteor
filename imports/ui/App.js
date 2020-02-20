import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Helmet } from "react-helmet";
import Sidebar from 'react-sidebar';
import { CSSTransition } from 'react-transition-group';
// import jQuery from 'jquery';
// import ReactDependentScript from 'react-dependent-script';

import Profiles from '../api/collections/profiles';

import PageLoader from './components/PageLoader';
import NavBar from './components/NavBar';
// import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import SidebarRightOpen from './components/SidebarRightOpen';
import ChatPopup from './components/ChatPopup';
import Routes from './Routes';
import './App.css';


class App extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    sidebarOpen: false,
	    title: '',
	    loading: false
	  };
	  this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}
	
	onSetSidebarOpen(open) {
	  this.setState({ sidebarOpen: open });
	}

  handleLogout () {
  	Meteor.logout(() => {
  		this.props.history.push("/login");
  	});
  }

	render () {

		if (this.props.loading || this.state.loading) {
			return <PageLoader />;
		}

		const isAuthenticated = (Meteor.userId() && this.props.profile) ? true : false;

		if (isAuthenticated) {
			this.props.profile.username = Meteor.user().username;
		}

		// Do not send all props to children as route params will be overwritten with this
		const childProps = {
		  isAuthenticated: isAuthenticated,
		  profile: this.props.profile,
		  changeTitle: (t) => this.setState({title: t}),
		  title: this.state.title,
		};

    const sidebarRight = isAuthenticated ? <SidebarRight profile={childProps.profile} openSidebar={() => this.onSetSidebarOpen(true)} /> : null;
    const sidebarRightWithTransition = isAuthenticated ? 
    	<CSSTransition
    	  in={!this.state.sidebarOpen}
    	  timeout={300}
    	  classNames="custom-sidebar"
    	  unmountOnExit
    	  onEnter={() => this.setState({sidebarOpen: false})}
    	  onExited={() => this.setState({sidebarOpen: true})}
    	>
    		{sidebarRight}
    	</CSSTransition> : null;
    const sidebarRightOpen = isAuthenticated ? <SidebarRightOpen profile={childProps.profile} closeSidebar={() => this.onSetSidebarOpen(false)} /> : <div></div>;
    const navBar = isAuthenticated ? 
    	<span><NavBar {...childProps} logout={() => {this.handleLogout()}}/><div className="header-spacer"></div></span> : null;

		return (
			<div className="App">
				<Helmet>
					<title>{childProps.title}</title>
				</Helmet>
				<Sidebar
				  sidebar={sidebarRightOpen}
				  open={this.state.sidebarOpen}
				  onSetOpen={this.onSetSidebarOpen}
				  pullRight={true}
				  shadow={false}
				  overlayId="sidebar-overlay"
				>
					{sidebarRightWithTransition}
					{navBar}
					<Routes childProps={childProps} />
					<ChatPopup />
				</Sidebar>
			</div>
		);
	}
}

export default withTracker(() => {
	const handles = [
	  Meteor.subscribe('profiles.own')
	];
	const loading = handles.some(handle => !handle.ready());
	return {
		loading,
		profile: Profiles.findOne({userId: Meteor.userId()})
	};
})(withRouter(App));
