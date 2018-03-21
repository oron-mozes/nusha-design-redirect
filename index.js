var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 80));

app.get('/', function(request, response) {
  response.redirect(301, 'http://www.nushadesign.co.il' + request.path);
  
});
