var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
//var order = require("./models/order.js");
//var user = require("./lib/User.js");
// var request = require("request");
// var cheerio = require("cheerio");
var UserTrack = require('./models/Article.js')

mongoose.Promise = Promise;

var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_dqj90bjh:7hul1v2v195dta1kumu4sookdk@ds141242.mlab.com:41242/heroku_dqj90bjh");
mongoose.connect('mongodb://heroku_kqxcxvjb:v013pehj9jabhajnh039cjelc4@ds011734.mlab.com:11734/heroku_kqxcxvjb');
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});

router.route('/users')
	.get(function(req, res){
		UserTrack.find(function(err, users){
			if (err)
				res.send("error: "+ err);
			res.json(users)
		});
	})
	.post(function(req, res){
		var user = new UserTrack();
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.phoneNumber = req.body.phoneNumber;
		user.email = req.body.email;
		user.password = req.body.password;

		comment.save(function(err){
			if (err)
				res.send(err);
			res.json({ message: 'User successfully added!'});
		});
	});

app.listen(port, function() {
  console.log("App running on port ", port);
});