var express = require('express');
var app = express();
var http = require("http");

  

app.use(express.static(__dirname + '/public'));

// http://localhost:3000/hello.txt?q=xxxxxx
app.get('/', function(req, res) {
  res.redirect('/index.html');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});


  http.createServer(function (req, res) {
    res.writeHead(301, {"Location": "http://www.enigmatic-chamber-1976.herokuapp.com"});
    res.end();
}).listen(80);