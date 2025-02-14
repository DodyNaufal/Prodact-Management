// require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "153.92.13.204",
  user: "u511724529_dblanjut",
  password: "W4@ERxG6kS7P6kW",
  database: "u511724529_dblanjut",
});
module.exports = pool.promise();
