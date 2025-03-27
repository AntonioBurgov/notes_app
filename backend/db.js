const mysql = require('mysql2');
require('dotenv').config(); // Load variables from .env

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error("❌ Failed to connect to MySQL:", err.message);
    throw err;
  }
  console.log("✅ Connected to MySQL DB");
});

module.exports = db;
