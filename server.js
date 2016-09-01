var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private aoure hit!');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method + ' ' + new Date().toString() + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req, res){
	res.send('I am an application architect');
});

app.use(express.static(__dirname + '/Public'));

app.listen(port, function(){
	console.log('Express server started on port ' + port);
	
});