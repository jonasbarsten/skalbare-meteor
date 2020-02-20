// Meteor.methods({
// 	'user.addProfilePicture' (file) {
// 		check(file, Object);

// 		const currentUser = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {profile: 1}});
// 		const existingPictureId = (currentUser && currentUser.profile && currentUser.profile.image && currentUser.profile.image.localId);

// 		if (existingPictureId) {
// 			Meteor.call('file.toTrash', existingPictureId, 'image', (err, res) => {
// 				if (err) {
// 					console.log(err);
// 				}
// 			});
// 		}

// 		Meteor.call('file.add', file, 'image', (err, res) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.image.awsKey': res.awsKey, 'profile.image.localId': res.localId}});
// 			}
// 		});
// 	},

// 	'user.addCoverPicture' (file) {
// 		check(file, Object);

// 		const currentUser = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {profile: 1}});
// 		const existingPictureId = (currentUser && currentUser.profile && currentUser.profile.cover && currentUser.profile.cover.localId);

// 		if (existingPictureId) {
// 			Meteor.call('file.toTrash', existingPictureId, 'image', (err, res) => {
// 				if (err) {
// 					console.log(err);
// 				}
// 			});
// 		}

// 		Meteor.call('file.add', file, 'image', (err, res) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.cover.awsKey': res.awsKey, 'profile.cover.localId': res.localId}});
// 			}
// 		});
// 	}

// });