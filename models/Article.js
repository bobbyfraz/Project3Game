var mongoose = require("mongoose");
var UserInfo = mongoose.Schema;

var UserLog = new UserInfo({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    // score: {
    //     type: Number,
    //     required: false
    // }
});

var user = mongoose.model("UserTrack", UserLog);

module.exports = user; 