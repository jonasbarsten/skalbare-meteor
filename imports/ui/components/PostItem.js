import React from 'react';
import moment from 'moment';

import Image from './Image';
import Loading from './Loading';
import PostCommentCompose from './PostCommentCompose';
import PostCommentItem from './PostCommentItem';

export default (props) => {

	const allProfiles = props.allProfiles;
	const profile = props.profile;
	const post = props.post;
	const author = post.author[0];
	const published = moment(post.dateAdded).fromNow();
	const userIsAuthor = (Meteor.userId() === author.userId) ? true : false;
	const type = post.type;
	let comments = post.comments;
	const numberOfComments = (comments && comments.length > 0) ? comments.length : 0;
	const reactions = post.reactions;
	const numberOfLikes = (reactions && reactions.length > 0) ? reactions.length : 0;
	let currentProfileReaction = reactions ? reactions.find(o => o.profileId === profile._id) : null;
	const currentProfileLikesClass = currentProfileReaction ? "active" : null;
	const currentProfileLikesElement = currentProfileReaction ? <span><a href="#">Du</a>, </span> : null;
	let namesPeopleLikesElement = (numberOfLikes > 2) ? 
		<div className="names-people-likes">
			{currentProfileLikesElement}<a href="#">XXXXX</a> og
			<br/>XX til liker dette
		</div> : null;

	comments.sort((a,b) => {
	  return new Date(b.dateAdded) - new Date(a.dateAdded);
	});

	const toggleLikePost = () => {
		Meteor.call('post.toggleReaction', post._id, profile._id, 'like');
	};

	const removePost = () => {
		Meteor.call('post.remove', post._id);
	};

	const image = (type === 'image') ? 
		<div className="post-thumb">
			<img src="/theme/img/post__thumb1.jpg" alt="photo" />
		</div> : null;

	const dropdown = userIsAuthor ?
		<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
			<ul className="more-dropdown">
				<li>
					<a onClick={() => removePost()} className="link">Slett</a>
				</li>
			</ul>
		</div> : null;


	return (
		<div className="ui-block">
			<article className="hentry post">
			
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
			
				<p style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>{post.text}</p>

				{image}
			
				<div className="post-additional-info inline-items">
			
					<span onClick={() => toggleLikePost()} className={`post-add-icon inline-items link ${currentProfileLikesClass}`}>
						<svg className="olymp-heart-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
						<span>{numberOfLikes}</span>
					</span>
			
					{namesPeopleLikesElement}
			
					<div className="comments-shared">
						<span className="post-add-icon inline-items link">
							<svg className="olymp-speech-balloon-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
							<span>{numberOfComments}</span>
						</span>
					</div>
			
				</div>
			
			</article>

			<ul className="comments-list">
				{comments.map((comment) => {
					const author = allProfiles.find(profile => profile._id === comment.profileId);
					return <PostCommentItem key={comment._id} comment={comment} post={post} profile={profile} author={author} />
				})}
			</ul>

			<PostCommentCompose post={post} profile={profile} />

		</div>
	);
}