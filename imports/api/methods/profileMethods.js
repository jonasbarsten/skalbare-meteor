import randomWords from 'random-words';

import Profiles from '../collections/profiles';

Meteor.methods({
	'profile.init' (user) {

		const newProfile = {
			userId: user._id,
			firstName: 'Anon',
			lastName: 'Antonsen',
			nickName: user.username,
			dateAdded: new Date(),
			lastChanged: new Date(),
			bio: 'Ingen bio ...',
			birthDate: new Date(),
			customStatus: randomWords({exactly:1, wordsPerString:2})[0]
		};

		Profiles.insert(newProfile);
	},
	'profile.update.bio' (profileId, bio) {
		Profiles.update(profileId, {$set: {bio: bio}});
	},
	'profile.update.profileImage' (profileId, imageId) {
		Profiles.update(profileId, {$set: {profileImage: imageId}});
	},
	'profile.update.coverImage' (profileId, imageId) {
		Profiles.update(profileId, {$set: {coverImage: imageId}});
	},
	'profile.update.customStatus' (profileId, customStatus) {
		Profiles.update(profileId, {$set: {customStatus: customStatus}});
	}
});