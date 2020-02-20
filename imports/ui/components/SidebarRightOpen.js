import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Profiles from '../../api/collections/profiles';
import Image from './Image';

import './SidebarRightOpen.css';

class SidebarRightOpen extends Component {
	render () {
		const profiles = this.props.profiles;
		return (
			<div className="fixed-sidebar right custom">
				<div className="fixed-sidebar-right sidebar--large custom" id="sidebar-right-1">

					<div className="mCustomScrollbar" data-mcs-theme="dark" style={{overflow: 'scroll'}}>

						<div className="ui-block-title ui-block-title-small">
							<a href="#" className="title">Folk</a>
							<a href="#">Instillinger</a>
						</div>

						<ul className="chat-users">

							{profiles.map((profile) => {
								return (
									<li className="inline-items js-chat-open" key={profile._id}>

										<div className="author-thumb">
											<Image id={profile.profileImage} size="34x34" className="avatar" alt="author" />
											<span className="icon-status online"></span>
										</div>

										<div className="author-status">
											<a href="#" className="h6 author-name">{profile.nickName}</a>
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
								);
							})}
							
						</ul>
					</div>
					<div className="search-friend inline-items">
						<form className="form-group" >
							<input className="form-control" placeholder="Søk folk..." defaultValue="" type="text" />
						</form>

						<a href="29-YourAccount-AccountSettings.html" className="settings">
							<svg className="olymp-settings-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>
						</a>

						<a onClick={this.props.closeSidebar} className="js-sidebar-open link">
							<svg className="olymp-close-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
						</a>
					</div>

					<a href="#" className="olympus-chat inline-items js-chat-open">

						<h6 className="olympus-chat-title">SKALBARE CHAT</h6>
						<svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
					</a>

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
})(SidebarRightOpen);