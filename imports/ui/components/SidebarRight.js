import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// import Sidebar from 'react-sidebar';

// import SidebarRightOpen from './SidebarRightOpen';

import Profiles from '../../api/collections/profiles';
import Image from './Image';

class SidebarRight extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    sidebarOpen: true
	  };
	  this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}
	
	onSetSidebarOpen(open) {
	  this.setState({ sidebarOpen: open });
	}

	render () {

		if (this.props.loading) {
			return null;
		}

		const profiles = this.props.profiles;

		return (

			<div>
				<div className="fixed-sidebar right">



					<div className="fixed-sidebar-right sidebar--small" id="sidebar-right">
						<div className="mCustomScrollbar" data-mcs-theme="dark" style={{overflow: 'scroll'}}>
							<ul className="chat-users">

								{profiles.map((profile) => {
									return (
										<li className="inline-items js-chat-open" key={profile._id}>
											<div className="author-thumb">
												<Image id={profile.profileImage} size="34x34" className="avatar" alt="author" />
												<span className="icon-status online"></span>
											</div>
										</li>
									);
								})}

							</ul>
						</div>

						<div className="search-friend inline-items">
							<a onClick={this.props.openSidebar} className="js-sidebar-open link">
								<svg className="olymp-menu-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
							</a>
						</div>

						<a href="#" className="olympus-chat inline-items js-chat-open">
							<svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
						</a>

					</div>









				</div>

				<div className="fixed-sidebar right fixed-sidebar-responsive" id="sidebar-right-responsive">

					<div className="fixed-sidebar-right sidebar--small">
						<a href="#" className="js-sidebar-open">
							<svg className="olymp-menu-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
							<svg className="olymp-close-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
						</a>
					</div>

					<div className="fixed-sidebar-right sidebar--large">
						<div className="mCustomScrollbar" data-mcs-theme="dark">

							<div className="ui-block-title ui-block-title-small">
								<a href="#" className="title">Close Friends</a>
								<a href="#">Settings</a>
							</div>

							<ul className="chat-users">
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar67-sm.jpg" className="avatar" />
										<span className="icon-status online"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Carol Summers</a>
										<span className="status">ONLINE</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>

								</li>
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar62-sm.jpg" className="avatar" />
										<span className="icon-status online"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Mathilda Brinker</a>
										<span className="status">AT WORK!</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>

								</li>

								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar68-sm.jpg" className="avatar" />
										<span className="icon-status online"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Carol Summers</a>
										<span className="status">ONLINE</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>


								</li>

								<li className="inline-items js-chat-open">


									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar69-sm.jpg" className="avatar" />
										<span className="icon-status away"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Michael Maximoff</a>
										<span className="status">AWAY</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>


								</li>

								<li className="inline-items js-chat-open">


									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar70-sm.jpg" className="avatar" />
										<span className="icon-status disconected"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Rachel Howlett</a>
										<span className="status">OFFLINE</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>


								</li>
							</ul>


							<div className="ui-block-title ui-block-title-small">
								<a href="#" className="title">MY FAMILY</a>
								<a href="#">Settings</a>
							</div>

							<ul className="chat-users">
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar64-sm.jpg" className="avatar" />
										<span className="icon-status online"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Sarah Hetfield</a>
										<span className="status">ONLINE</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>
								</li>
							</ul>


							<div className="ui-block-title ui-block-title-small">
								<a href="#" className="title">UNCATEGORIZED</a>
								<a href="#">Settings</a>
							</div>

							<ul className="chat-users">
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar71-sm.jpg" className="avatar" />
										<span className="icon-status online"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Bruce Peterson</a>
										<span className="status">ONLINE</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>


								</li>
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar72-sm.jpg" className="avatar" />
										<span className="icon-status away"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Chris Greyson</a>
										<span className="status">AWAY</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>

								</li>
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar63-sm.jpg" className="avatar" />
										<span className="icon-status status-invisible"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Nicholas Grisom</a>
										<span className="status">INVISIBLE</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>
								</li>
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar72-sm.jpg" className="avatar" />
										<span className="icon-status away"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Chris Greyson</a>
										<span className="status">AWAY</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>
								</li>
								<li className="inline-items js-chat-open">

									<div className="author-thumb">
										<img alt="author" src="/theme/img/avatar71-sm.jpg" className="avatar" />
										<span className="icon-status online"></span>
									</div>

									<div className="author-status">
										<a href="#" className="h6 author-name">Bruce Peterson</a>
										<span className="status">ONLINE</span>
									</div>

									<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

										<ul className="more-icons">
											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
											</li>

											<li>
												<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
											</li>
										</ul>

									</div>
								</li>
							</ul>

						</div>

						<div className="search-friend inline-items">
							<form className="form-group" >
								<input className="form-control" placeholder="Search Friends..." defaultValue="" type="text" />
							</form>

							<a href="29-YourAccount-AccountSettings.html" className="settings">
								<svg className="olymp-settings-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>
							</a>

							<a href="#" className="js-sidebar-open">
								<svg className="olymp-close-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
							</a>
						</div>

						<a href="#" className="olympus-chat inline-items js-chat-open">

							<h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
							<svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
						</a>
					</div>
				</div>
			</div>

		);
	}
}

export default withTracker((props) => {
	const handles = [
	  Meteor.subscribe('profiles.all')
	];
	const loading = handles.some(handle => !handle.ready());
	return {
		loading,
		profiles: Profiles.find({_id: {$ne: props.profile._id}}).fetch()
	}
})(SidebarRight);


