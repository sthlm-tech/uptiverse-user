var App = require("./core/core");
var users = require("./services/users")	;

var baseUrl = "/users"
module.exports = function() {

	App.Express.get( baseUrl, function (req, res) {
			users.getusers()
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
