var express = require('express');
var app = express();



app.use(express.static(__dirname + '/public'));

// http://localhost:3000/hello.txt?q=xxxxxx
app.get('/', function(req, res) {
  res.redirect('/index.html');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});


  