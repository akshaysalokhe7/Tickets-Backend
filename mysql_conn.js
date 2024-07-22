var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tickets_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected!");
});

module.exports = con;