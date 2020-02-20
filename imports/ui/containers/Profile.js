import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Profiles from '../../api/collections/profiles';

import ProfileHeader from '../components/ProfileHeader';
import PostCompose from '../components/PostCompose';
import PostList from '../components/PostList';

const Profile = (props) => {

	if (props.loading || !props.loadedProfile) {
		return null;
	}

	console.log(props);

	const profile = props.profile;
	const loadedProfile = props.loadedProfile;
	const ownProfile = (loadedProfile._id === profile._id) ? true : false;
	const compose = ownProfile ? <PostCompose profile={profile} /> : null;

	return (
		<div className="profile container">
			<ProfileHeader profile={loadedProfile} ownProfile={ownProfile} />
			{compose}
			<PostList author={loadedProfile} profile={profile} />
		</div>
	);

}

export default withTracker((props) => {
	const profileId = props.match.params.id;
	const handles = [
	  Meteor.subscribe('profiles.one', profileId)
	]
	const loading = handles.some(handle => !handle.ready());
	return {
		loading,
		loadedProfile: Profiles.findOne({_id: profileId})
	};

})(Profile);