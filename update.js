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

//updating database entry
con.query('UPDATE employees SET location = ? Where ID = ?', ['South Africa', 5],
	function (err,result){
		if (err) throw err;

		console.log('changed' + result.changedRows + 'rows');
});

//listing database entries
con.query('SELECT * FROM employees', function(err, rows){
	if(err) 
		throw err;

	console.log('data received from db:\n');
	console.log(rows);

	for (var i = 0; i < rows.length; i++){
		console.log(rows[i].name);
	};
});

con.end(function(err){
	//connection terminated gracefully
});