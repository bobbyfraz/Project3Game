var mongoose = require("mongoose");

var UserInfo = mongoose.Schema;

var UserLog = new UserInfo({
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	phoneNumber:{
		type: Number,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	}
});

var user = mongoose.model("project3", UserLog);

module.exports = user; 