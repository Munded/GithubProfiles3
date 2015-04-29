var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var path = require('path');
// var appDir = path.dirname(require.main.filename);
app.use(express.static(__dirname + '/'));
// app.use('./bower_components',  express.static(__dirname + './bower_components'));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, './', "./index.html"));
})

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;