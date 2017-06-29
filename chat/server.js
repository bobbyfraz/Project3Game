//express server

//including all of the modules and variables 
var express = require('express'); //express
var app = express();
var server = require('http').createServer(app); //pass the app variable
var io = require('socket.io').listen(server); //socket.io pass the server variable

//two arrays needed
users = [];
connections = [];

//run the server and console log it to make sure it's working. 
server.listen(process.env.PORT || 3000);
console.log ('server running...');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});