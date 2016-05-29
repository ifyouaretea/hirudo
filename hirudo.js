var mysql      = require('mysql');
var express = require('express');
var router = express.Router();
var connection = mysql.createConnection({
	host		: 'mydbinstance.cue9wlybqd89.ap-southeast-1.rds.amazonaws.com',
	user		: 'sutdadmin',
	password	: 'sutd1234',
	database	: 'hirudo',
	port		: 3306,
	multipleStatements: true
});

connection.connect();

router.post('/patient', function(req,res){
	console.log("RESTFUL API: \t data");
	isbn13 = req.query.isbn13;
	user = req.payload._id;
	responseMessage = {};
	try{
		connection.query('select * from book where ISBN13 LIKE ?;', [isbn13] , function(err, rows, fields) {	
			if (err) throw err;
			
			if (rows.length == 0){
				responseMessage.status = 0;
			} 
		});
	} catch (err){
		console.log(err);
		responseMessage.status = 0;
		res.send(responseMessage);
	}
});

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

router.get('/patient', function(req,res){
	console.log("RESTFUL API: \t data");
	
});

connection.end();