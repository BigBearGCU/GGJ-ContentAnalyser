var express = require('express');
var bodyParser = require('body-parser');
var credentials=require('./credentials.js');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
require('./routes/routes')(app);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
