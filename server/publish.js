import { ReactiveAggregate } from 'meteor/tunguska:reactive-aggregate';

// Collections
import Images from '../imports/api/collections/images.js';
import Profiles from '../imports/api/collections/profiles.js';
import Posts from '../imports/api/collections/posts.js';
import Comments from '../imports/api/collections/comments.js';

Meteor.publish('profiles.all', function () {
	return Profiles.find();
});

Meteor.publish('profiles.own', function () {
  return Profiles.find({userId: this.userId});
});

Meteor.publish('profiles.one', function (profileId) {
  return Profiles.find({_id: profileId});
});

Meteor.publish('posts.all', function () {

  ReactiveAggregate(this, Posts, [
      { $lookup:
        {
          from: 'profiles',
          localField: 'profileId',
          foreignField: '_id',
          as: 'author'
        }
      }, 
      { $lookup:
        {
          from: 'comments',
          localField: 'comments',
          foreignField: '_id',
          as: 'comments'
        }
      }, { $sort: {dateAdded: -1}}
    ], {
      noAutomaticObserver: true,
      debounceCount: 100,
      debounceDelay: 100,
      observers: [
        Posts.find(),
        Comments.find(),
        Profiles.find()
      ]
    });

});

Meteor.publish('users.current', function () {
	return Meteor.users.find({_id: this.userId}, {fields: {"profile": 1}});
});

Meteor.publish('files.images.all', function () {
  return Images.collection.find({}, {
    fields: {
      extension: 1,
      _downloadRoute: 1,
      _collectionName: 1,
      versions: 1,
      meta: 1
      // 'versions.versionName.extension': 1 // <-- Required only for file's version .link(version), and if extension is different from original file
    }
  });
});