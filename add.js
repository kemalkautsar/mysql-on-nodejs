var mysql = require('mysql');

//connection to the db
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'sitepoint'
});


//checking database connection
con.connect(function(err){
	if(err){
		console.log('error connecting to db');
		return;
	}
	console.log('connection established');
});

//adding database entry
var employee = { name: 'winnie', location: 'australia'};
con.query('INSERT INTO employees SET ?', employee, function(err,res){
	if(err) throw err;

	console.log('Last insert ID: ',res.insertID);
});

//listing newly added database
con.query('SELECT * FROM employees', function(err, rows){
	if(err) 
		throw err;

	console.log('data received from db:\n');
	console.log(rows);
});

con.end(function(err){
	//connection terminated gracefully
});