Meteor.startup(() => {

	// Defining initial user credentials
	let initialUser = {};
	initialUser.email = Meteor.settings.private.initialUser.email;
	initialUser.password = Meteor.settings.private.initialUser.password;
	initialUser.username = Meteor.settings.private.initialUser.username;

	// Checking if initial user exists based on email
	const initialUserExists = Meteor.users.findOne({'username': initialUser.username});

	if (!initialUserExists) {

		// If Initial user doesn't exist, create it

		const profile = {
			'name': 'Jonas Barsten',
			'firstName': 'Jonas',
			'lastName': 'Barsten'
		};

		const newUserId = Accounts.createUser({profile: profile, username: initialUser.username, email: initialUser.email, password: initialUser.password});

		// Give initial user the role of admin
		Roles.createRole('super-admin', {unlessExists: true});
		Roles.addUsersToRoles( newUserId, 'super-admin', null );
	}

	// Set mail settings
	process.env.MAIL_URL = Meteor.settings.private.smtp;

	// Configure facebook-login
	// ServiceConfiguration.configurations.upsert({
	// 	service: "facebook"
	// }, {
	// 	$set: {
	// 		appId: Meteor.settings.facebook.appId,
	// 		loginStyle: "popup",
	// 		secret: Meteor.settings.facebook.secret
	// 	}
	// });

	// // Configure google-login
	// ServiceConfiguration.configurations.upsert({
	// 	service: "google"
	// }, {
	// 	$set: {
	// 		clientId: Meteor.settings.google.clientId,
	// 		secret: Meteor.settings.google.secret
	// 	}
	// });
});