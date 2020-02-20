import React, { Component } from 'react';

import Image from './Image';

class PostCommentCompose extends Component {

	handleCommentSubmit (e) {

		e.preventDefault();

		const post = this.props.post;
		const profile = this.props.profile;
		const value = this.refs.commentText.value;
		
		Meteor.call('comment.add', post, profile, 'text', value, () => {
			this.refs.commentText.value = "";
		});
	}

	render () {

		const profile = this.props.profile;

		return (
			<div>
				<form className="comment-form inline-items">
				
					<div className="post__author author vcard inline-items">
						<Image id={profile.profileImage} size="36x36" alt="author" />
				
						<div className="form-group with-icon-right ">
							<textarea ref="commentText" className="form-control" placeholder="Kommenter her ..."></textarea>
						</div>
					</div>
				
					<button className="btn btn-md-2 btn-primary" onClick={this.handleCommentSubmit.bind(this)}>Kommentér</button>
				
				</form>
			</div>
		);
	}
}

export default PostCommentCompose;