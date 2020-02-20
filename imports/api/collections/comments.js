import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Comments = new Mongo.Collection( 'comments' );

Comments.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

Comments.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});

const CommentsSchema = new SimpleSchema({
	"userId": {
		type: String
	},
	"profileId": {
		type: String
	},
	"postId": {
		type: String
	},
	"type": {
		type: String
	},
	"text": {
		type: String
	},
	"image": {
		type: String,
		optional: true
	},
	"video": {
		type: String,
		optional: true
	},
	"dateAdded": {
		type: Date
	},
	"lastChanged": {
		type: Date
	},
	"replies": {
		type: Array,
		optional: true
	},
	"replies.$": {
		type: Object
	},
	"replies.$.commentId": {
		type: String
	},
	"replies.$.dateAdded": {
		type: Date
	},
	"reactions": {
		type: Array,
		optional: true
	},
	"reactions.$": {
		type: Object
	},
	"reactions.$.userId": {
		type: String
	},
	"reactions.$.profileId": {
		type: String
	},
	"reactions.$.type": {
		type: String
	},
	"reactions.$.dateAdded": {
		type: Date
	}
});

Comments.attachSchema( CommentsSchema );

export default Comments;