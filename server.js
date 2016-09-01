var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req, res){
	res.send('I am an application architect');
});

app.use(express.static(__dirname + '/Public'));

app.listen(port, function(){
	console.log('Express server started on port ' + port);

});