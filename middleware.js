var express = require('express');
var app = express();

module.exports = {
	requireAuthentication: function(req, res, next){
		console.log('Private aoure hit!');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method + ' ' + new Date().toString() + ' ' + req.originalUrl);
		next();
	}
}