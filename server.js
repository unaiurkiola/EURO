var express = require('express');
var app = express();
 path = require("path")




   
app.use(express.static(__dirname + '/public'));

// http://localhost:3000/hello.txt?q=xxxxxx



app.get('/', function(req, res) {
  res.redirect('/index.html');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});


app.post('/mail', function(req, res) {
			var nodemailer = require('nodemailer');

			// create reusable transporter object using SMTP transport
			var transporter = nodemailer.createTransport({
			    service: 'Gmail',
			    auth: {
			        user: 'pruebakitteko@gmail.com',
			        pass: '741963852'
			    }
			});

			// NB! No need to recreate the transporter object. You can use
			// the same transporter object for all e-mails


			// setup e-mail data with unicode symbols
			var mailOptions = {
			    from: 'Fred Foo ✔ pruebakitteko@gmail.com', // sender address
			    to: '<boxes1@euromikels.com>', // list of receivers
			    subject: 'hola ✔', // Subject line
			    text: 'Hello world ✔', // plaintext body
			    html: '<b>Hello world ✔</b>' // html body
			};


			// send mail with defined transport object
			transporter.sendMail(mailOptions, function(error, info){
			    if(error){
			        console.log(error);
			    }else{
			        console.log('Message sent: ' + info.response);
			    }
			});
});



/* pruebaaa
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <boxes1@euromikels.com>', // sender address
    to: 'unaiurkiola@euromikels.com', // list of receivers
    subject: 'hola ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});*/

