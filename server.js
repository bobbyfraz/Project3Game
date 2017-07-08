var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var UserTrack = require('./models/Article.js')
var server = require('http').createServer(app); //pass the app variable
var io = require('socket.io').listen(server); //socket.io pass the server variable

mongoose.Promise = Promise;

var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

users = [];
connections = [];

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

app.post("/signup", function(req,res){
	if (req.body)
	{
		res.json(req.body);
	}
	else{
		res.json({
			completed:"error on sign up"
		});
	}
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
		user.name = req.body.name;
		user.email = req.body.email;
		user.mobile = req.body.mobile;
		user.password = req.body.password;
		//user.password = req.body.password;

		comment.save(function(err){
			if (err)
				res.send(err);
			res.json({ message: 'User successfully added!'});
		});
	});

// app.listen(port, function() {
//   console.log("App running on port ", port);
// });

// server.listen(process.env.PORT || 3000);

app.use(express.static("public"))

//create a route that will run a function, responding by sending a file passing the index.html
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//open a connection with socket.io
io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);

	//Disconnect, so when a user disconnects, this will tell us how many are still connected.
	socket.on('disconnect', function(data){
		users.splice(users.indexOf(socket.username), 1);
		updateUsernames();
	connections.splice(connections.indexOf(socket), 1);
	console.log('Disconnected: %s sockets connected', connections.length);	
	});
	
	//Send message
	socket.on('send message', function(data){
		console.log(data);
		io.sockets.emit('new message', {msg: data, user: socket.username});
	});

	//New user
	socket.on('new user', function(data, callback){
		callback(true);
		socket.username = data;
		users.push(socket.username);
		updateUsernames();
	});

	function updateUsernames(){
		io.sockets.emit('get users', users);
	}
});

app.listen(port, function() {
  console.log("App running on port ", port);
});
//an api call for sign up, login, sign out,
// to check if logged in, a list of all users



