var axios = require("axios");
// Geocoder API
var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
// Helper functions for making API Calls
var helper = {
  // This function serves our purpose of running the query to geolocate.
  postSignup: function(signup) {
    // Figure out the geolocation
    var queryURL = "/signup";
    return axios.post(queryURL, signup).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data) {
        return response.data;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },
  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/signup");
  },
  // This function posts new searches to our database.
  postHistory: function(signup) {
    return axios.post("/signup",{
    "name": "John Smith",
   "email": "jsmith@gmail.com",
   "mobile": 123456798,
   "password": "abc123"
}).then(function(response){
    console.log('saved successfully')
  }); 
  }
}; 
// We export the API helper
module.exports = helper