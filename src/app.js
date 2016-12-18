'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/fullstack/guessing-game/src/app/', function(request, response) {
  response.render('index');
});

app.listen(3000, function() {
  console.log('Website is up and running on port 3000.');
});

