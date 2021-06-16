const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
    database: "first_attempt"
});

connection.connect((error) => {
	if (error) {
		return console.log("Connect failed with DB.");
	} else {
		return console.log("Connect success !!!");
	}
});

module.exports = connection;
