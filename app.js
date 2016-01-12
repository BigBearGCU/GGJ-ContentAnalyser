var express = require('express');
var bodyParser = require('body-parser');
var credentials=require('./credentials.js');

//https://github.com/BoyCook/TwitterJSClient

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set("jsonp callback", true);
require('./routes/routes')(app);

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
