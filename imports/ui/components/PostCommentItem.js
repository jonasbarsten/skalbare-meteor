import React from 'react';
import moment from 'moment';

import Image from './Image';

export default (props) => {

	const author = props.author;
	console.log(author.profileImage);
	const comment = props.comment;
	const post = props.post;
	const profile = props.profile;
	const published = moment(comment.dateAdded).fromNow();
	const userIsAuthor = (Meteor.userId() === comment.userId) ? true : false;
	let reactions = comment.reactions;
	const numberOfLikes = (reactions && reactions.length > 0) ? reactions.length : 0;
	let currentProfileReaction = reactions ? reactions.find(o => o.profileId === profile._id) : null;
	const currentProfileLikesClass = currentProfileReaction ? "active" : null;

	const removeComment = () => {
		Meteor.call('comment.remove', post._id, comment._id);
	}

	const toggleLikeComment = () => {
		Meteor.call('comment.toggleReaction', comment._id, profile._id, 'like');
	};

	const dropdown = userIsAuthor ?
		<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
			<ul className="more-dropdown">
				<li>
					<a onClick={() => removeComment()} className="link">Slett</a>
				</li>
			</ul>
		</div> : null;

	return (
		<li className="comment-item">
			<div className="post__author author vcard inline-items">
				<Image id={author.profileImage} size="36x36" alt="author" />		
				<div className="author-date">
					<a className="h6 post__author-name fn" href="#">{author.nickName}</a>
					<div className="post__date">
						<time className="published">
							{published}
						</time>
					</div>
				</div>
		
				{dropdown}
		
			</div>
		
			<p>{comment.text}</p>
		
			<span onClick={() => toggleLikeComment()} className={`post-add-icon inline-items link ${currentProfileLikesClass}`}>
				<svg className="olymp-heart-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
				<span>{numberOfLikes}</span>
			</span>
		</li>
	);
}