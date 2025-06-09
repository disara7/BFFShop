const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'bffshop_db'
});

connection.connect(err => {
  if (err) console.error('DB connection error:', err.message);
  else console.log('Connected to MySQL DB');
});

module.exports = connection;