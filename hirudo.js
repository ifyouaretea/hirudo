var mysql      = require('mysql');
var express = require('express');
var router = express.Router();
var connection = mysql.createConnection({
	host		: 'mydbinstance.cue9wlybqd89.ap-southeast-1.rds.amazonaws.com',
	user		: 'sutdadmin',
	password	: 'sutd1234',
	database	: 'hirudo',
	port		: 3306
});

connection.connect();

router.get('/patient', function(req,res){
	console.log("RESTFUL API: \t data");
	
});

connection.end();