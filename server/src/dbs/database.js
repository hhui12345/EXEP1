const mysql = require('mysql2/promise'); 
require('dotenv').config();

async function connectToDB() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('MySQL connect successfully');
    return connection;
  } catch (error) {
    console.error(' MySQL connection failed:', error);
    process.exit(1);
  }
}



module.exports = connectToDB;
