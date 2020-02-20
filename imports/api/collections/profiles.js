import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Profiles = new Mongo.Collection( 'profiles' );

Profiles.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

Profiles.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});


const ProfilesSchema = new SimpleSchema({
	"userId": {
		type: String
	},
	"firstName": {
		type: String
	},
	"lastName": {
		type: String
	},
	"nickName": {
		type: String
	},
	"customStatus": {
		type: String,
		optional: true
	},
	"bio": {
		type: String
	},
	"profileImage": {
		type: String,
		optional: true
	},
	"coverImage": {
		type: String,
		optional: true
	},
	"birthDate": {
		type: Date
	},
	"dateAdded": {
		type: Date
	},
	"lastChanged": {
		type: Date
	},
	"type": {
		type: String,
		optional: true
	},
	"numberOfPosts": {
		type: Number,
		optional: true
	},
	"numberOfPhotos": {
		type: Number,
		optional: true
	},
	"numberOfVideos": {
		type: Number,
		optional: true
	},
	"numberOfComments": {
		type: Number,
		optional: true
	},
	"numberOfLikes": {
		type: Number,
		optional: true
	}
});

Profiles.attachSchema( ProfilesSchema );

export default Profiles;