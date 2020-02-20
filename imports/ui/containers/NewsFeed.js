import React from 'react';

import PostList from '../components/PostList';
import PostCompose from '../components/PostCompose';

export default (props) => {
	return (
		<div className="container">
			<PostCompose profile={props.profile} />
			<PostList profile={props.profile} />
		</div>
	);
}