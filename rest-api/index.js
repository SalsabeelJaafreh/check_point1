var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var routers=require('./routers.js')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});




app.use('/',routers);


 app.get('/', function (req, res) {
	 res.sendFile("/Users/rbk29/Desktop/check_point1/front-end/public/index.html")
 });




// Do not touch the exports object
module.exports = app;

