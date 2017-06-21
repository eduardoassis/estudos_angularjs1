var express = require('express'),
	data = require('./data');
var app = express();

app.get('/', function(req, res){
  res.status(404).send('Found but not in that way');
});

app.get('/helloWorld', function(req, res){
  res.json({data: 'Hello World!'});
});

app.get('/region', function (req, res) {
  res.json(data);
});

app.listen(3000, function () {
  console.log('API Server listening on port 3000!');
});
