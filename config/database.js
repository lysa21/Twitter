const mysql = require("mysql2");
const dotenv = require("dotenv").config();

// JUST ONE connect to more execute
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,

  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// now get a Promise wrapped instance of that pool
module.exports = pool.promise();
