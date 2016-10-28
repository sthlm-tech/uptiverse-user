var config = require("./../config");
var mongoose = require('mongoose');
var User = require("./../models/User");
var when = require('when');
function UserService() {
	var self = this;

	mongoose.connect(config.db_connectionString);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
	});

	self.getUserById = function(id){
		var deferred = when.defer();

		User.findOne({"_id" : id}, function(err,user){
			deferred.resolve(user);
		});

		return deferred.promise;
	};

	self.getusers = function(){
		var deferred = when.defer();

		User.find(function(err, users) {
			deferred.resolve(users);
	  });

		return deferred.promise;
	};

	self.create = function(in_user_data){
		var deferred = when.defer();
		var user = new User();
		user.firstname = in_user_data.firstname;
		user.lastname	 = in_user_data.lastname;
		user.pnr = in_user_data.pnr;
		user.birthday = in_user_data.birthday;

		user.save(function(err, createdUser){
			deferred.resolve(createdUser);
		});

		return deferred.promise;
	}

}
module.exports = new UserService();
