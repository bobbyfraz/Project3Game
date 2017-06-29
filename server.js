var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var order = require("./models/order.js");
var user = require("./lib/User.js");
// var request = require("request");
// var cheerio = require("cheerio");

mongoose.Promise = Promise;

var app = express();

var port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_dqj90bjh:7hul1v2v195dta1kumu4sookdk@ds141242.mlab.com:41242/heroku_dqj90bjh");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});	

// app.get("/users", function(req, res){
// 	user.find({}, function(err, doc){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			res.json(doc);
// 		}
// 	});
// });

app.listen(port, function() {
  console.log("App running on port ", port);
});