var express = require('express');
var app = express();
var path = require('path');
var random = require('./routes/random.js');
var index = require('./routes/index.js')

//declare routes and open up the public folder
app.use('/', index)
app.use('/NewEmployee', random);
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')))
app.use(express.static(path.join(__dirname, './public')));
//start the server and console log the port it is on.
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Listening on port: ' + server.address().port);
});
