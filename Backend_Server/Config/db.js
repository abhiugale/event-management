const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'abhiugale',
  password: 'Urvi@7860',
  database: 'event_management'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

module.exports = db;
