const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	port: port,
	user: "user_name",
    database: "database_name"
});

connection.connect((error) => {
	if (error) {
		return console.log("Connect failed with DB.");
	} else {
		return console.log("Connect success !!!");
	}
});

module.exports = connection;
