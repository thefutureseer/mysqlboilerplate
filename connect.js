const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
});

// Execute a SQL query
const sql = 'SELECT * FROM yourtable';
connection.query(sql, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// Close the connection to the MySQL server
connection.end((err) => {
  if (err) throw err;
  console.log('Disconnected from MySQL server');
});
