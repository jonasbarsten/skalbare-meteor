import Posts from '../collections/posts';
import Profiles from '../collections/profiles';

Meteor.methods({
	'post.add' (profile, type, value, media) {
		const newPost = {
			userId: this.userId,
			profileId: profile._id,
			type: type,
			text: value,
			dateAdded: new Date(),
			lastChanged: new Date(),
		};

		Posts.insert(newPost);
		Profiles.update({_id: profile._id}, {$inc: {numberOfPosts: 1}});
	},
	'post.toggleReaction' (postId, profileId, type) {
		const post = Posts.findOne({_id: postId});

		const reaction = {
			userId: this.userId,
			profileId: profileId,
			type: type,
			dateAdded: new Date()
		};

		// Initial reaction
		if (!post.reactions) {
			Posts.update({_id: postId}, {$push: {reactions: reaction}});
			Profiles.update({_id: profileId}, {$inc: {numberOfLikes: 1}});
			return;
		}

		let profileReaction = post.reactions.find(o => o.profileId === profileId);

		if (profileReaction) {
			Posts.update({_id: postId}, {$pull: {reactions: {profileId: profileId}}});
			Profiles.update({_id: profileId}, {$inc: {numberOfLikes: -1}});
			return;
		}

		if (!profileReaction) {
			Posts.update({_id: postId}, {$push: {reactions: reaction}});
			Profiles.update({_id: profileId}, {$inc: {numberOfLikes: 1}});
			return;
		}
	},
	'post.remove' (postId) {
		const post = Posts.findOne({_id: postId});
		Posts.remove({_id: postId});
		Profiles.update({_id: post.profileId}, {$inc: {numberOfPosts: -1}});
	}
});