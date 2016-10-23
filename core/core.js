var express = require("express");
var bodyParser = require("body-parser");
var config = require("./../config");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Eureka = require('eureka-js-client').Eureka;
/*
passport.use(new GoogleStrategy({
    clientID: "524442664999-jom04q4ea3erjt4fr84m3cf1sbojalhd.apps.googleusercontent.com",
    clientSecret: "olSVjQPyorD7JxYXAwgmS2q6",
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
*/
var App = {
	Express: {},
	Server: {},
	init: function() {
		App.Express = express();
		App.Express.use(bodyParser());

		require("./../routes")();

		App.Server = App.Express.listen(process.env.PORT || config.port, function() {
		    console.log("Listening on port %d", App.Server.address().port);
		});

		App.Eureka = new Eureka({
      // application instance information
      instance: {
        app: 'uptiverse-user',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: 8080,
        vipAddress: 'jq.test.something.com',
        dataCenterInfo: {
          name: 'MyOwn',
        },
      },
      eureka: {
        // eureka server host / port
        host: '172.17.25.70',
        port: 32768,
      },
    });

      App.Eureka.start();
	}
};

module.exports = App;
