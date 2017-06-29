var express = require('express');
var router = express.Router();
var User = require('../lib/User');

router.get('/', function(req, res, next){
	res.render('index', { title: 'Express'});
});

router.post('/register', function(req, res){
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var phoneNumber = req.body.phoneNumber
	var email = req.body.email
	var username = req.body.username;
	var password = req.body.password;

	var newuser = new User();
	newuser.firstname = req.body.firstname;
	newuser.lastname = req.body.lastname;
	newuser.phoneNumber = req.body.phoneNumber;
	newuser.email = req.body.email
	newuser.username = username;
	newuser.password = password;
	newuser.save(function(error, savedUser){
		if (error){
			console.log(error);
			return res.status(500).send();
		}
		return res.status(200).send();
	})
})
module.exports = router;