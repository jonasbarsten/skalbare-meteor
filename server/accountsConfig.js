Meteor.startup(() => {

	// Accounts.config({
	// 	forbidClientAccountCreation : true
	// });

	Accounts.urls.resetPassword = (token) => {
		return Meteor.absoluteUrl(`resetPassword/${token}`);
	};

	Accounts.onCreateUser((options, user) => {
		
		Meteor.call('profile.init', user);

		return user;

	});
});