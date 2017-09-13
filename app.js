// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

// create a new express server
var app = express();
app.use(bodyParser.json());
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the port from environment
var port = process.env.PORT || 6602;


require('./routes/Route')(app);

// start server on the specified port and binding host
app.listen(port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on localhost");
});
