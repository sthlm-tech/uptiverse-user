var App = require("./../core/core");
var users = require("./users")	;

var baseUrl = "/users"
module.exports = function() {

	App.Express.get( baseUrl, function (req, res) {
			users.getusers()
			.then(function(response) {
				res.send(response);
			});
	});

	App.Express.get( baseUrl + "/:id", function (req, res) {
			users.getUserById(req.params.id)
			.then(function(response) {
				res.send(response);
			});
	});

	App.Express.post( baseUrl + "/create", function (req, res) {
			users.create(req.body.user)
			.then(function(response) {
				res.send(response);
			});
	});

};
