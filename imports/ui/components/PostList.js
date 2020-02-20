import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Posts from '../../api/collections/posts';
import Profiles from '../../api/collections/profiles';

import Loading from './Loading';
import PostItem from './PostItem';

class PostList extends Component {
	render () {

		let posts = this.props.posts;

		posts.sort((a,b) => {
		  return new Date(b.dateAdded) - new Date(a.dateAdded);
		});

		if (this.props.loading) {
			return <Loading />
		}

		return (
			<div id="newsfeed-items-grid">
				{posts.map((post) => {
					return <PostItem key={post._id} post={post} profile={this.props.profile} allProfiles={this.props.allProfiles} />
				})}
			</div>
		);

	}
}

// export default PostsList;

export default withTracker((props) => {
	const handles = [
	  Meteor.subscribe('posts.all'),
	  Meteor.subscribe('profiles.all')
	];
	const loading = handles.some(handle => !handle.ready());
	const posts = props.author ? Posts.find({profileId: props.author._id}).fetch() : Posts.find().fetch();
	return {
	  loading,
	  posts: posts,
	  allProfiles: Profiles.find().fetch()
	};
})(PostList);