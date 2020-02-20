import Posts from '../collections/posts';
import Comments from '../collections/comments';
import Profiles from '../collections/profiles';

Meteor.methods({
	'comment.add' (post, profile, type, value) {

		const newComment = {
			userId: this.userId,
			profileId: profile._id,
			postId: post._id,
			type: type,
			text: value,
			dateAdded: new Date(),
			lastChanged: new Date(),
		};

		const commentId = Comments.insert(newComment);

		Posts.update({_id: post._id}, {$addToSet: {comments: commentId}})
		Profiles.update({_id: profile._id}, {$inc: {numberOfComments: 1}});
	},
	'comment.remove' (postId, commentId) {
		const comment = Comments.findOne({_id: commentId});
		Posts.update({_id: postId}, {$pull: {comments: commentId}})
		Comments.remove({_id: commentId});
		Profiles.update({_id: comment.profileId}, {$inc: {numberOfComments: -1}});
	},
	'comment.toggleReaction' (commentId, profileId, type) {
		const comment = Comments.findOne({_id: commentId});

		const reaction = {
			userId: this.userId,
			profileId: profileId,
			type: type,
			dateAdded: new Date()
		};

		// Initial reaction
		if (!comment.reactions) {
			Comments.update({_id: commentId}, {$push: {reactions: reaction}});
			Profiles.update({_id: profileId}, {$inc: {numberOfLikes: 1}});
			return;
		}

		let profileReaction = comment.reactions.find(o => o.profileId === profileId);

		if (profileReaction) {
			Comments.update({_id: commentId}, {$pull: {reactions: {profileId: profileId}}});
			Profiles.update({_id: profileId}, {$inc: {numberOfLikes: -1}});
			return;
		}

		if (!profileReaction) {
			Comments.update({_id: commentId}, {$push: {reactions: reaction}});
			Profiles.update({_id: profileId}, {$inc: {numberOfLikes: 1}});
			return;
		}
	},
});