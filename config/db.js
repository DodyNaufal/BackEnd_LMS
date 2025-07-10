const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost", // Jika pakai XAMPP, tetap 'localhost'
  user: "root", // Default user XAMPP
  password: "", // Default tanpa password
  database: "lms", // Ganti dengan nama database kamu
});

// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed: " + err.stack);
//     return;
//   }
//   console.log("Connected to MySQL database.");
// });

module.exports = db;
