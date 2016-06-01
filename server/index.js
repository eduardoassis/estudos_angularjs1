var express = require('express'),
	data = require('./data');
var app = express();

app.get('/region', function (req, res) {
  res.json(data);
});

app.listen(3000, function () {
  console.log('API Server listening on port 3000!');
});