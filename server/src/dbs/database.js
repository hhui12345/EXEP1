const mysql = require('mysql2/promise'); 
require('dotenv').config();
const {db: {host, user, password, database}} = require("../configs/config.db");

async function connectToDB() {
  try {
    const connection = await mysql.createConnection({
      host,
      user,
      password,
      database
    });

    console.log('MySQL connect successfully');
    return connection;
  } catch (error) {
    console.error(' MySQL connection failed:', error);
    process.exit(1);
  }
}



module.exports = connectToDB;
