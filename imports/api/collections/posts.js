import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Posts = new Mongo.Collection( 'posts' );

Posts.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

Posts.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});

const PostsSchema = new SimpleSchema({
	"userId": {
		type: String
	},
	"profileId": {
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
	"comments": {
		type: Array,
		optional: true
	},
	"comments": {
		type: Array,
		optional: true
	},
	"comments.$": {
		type: String
	},
	// "comments.$.dateAdded": {
	// 	type: Date
	// },
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

Posts.attachSchema( PostsSchema );

export default Posts;