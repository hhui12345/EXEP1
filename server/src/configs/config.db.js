require('dotenv').config();

const config = {
  app: {
    port: process.env.DEV_APP_PORT || 5000,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

module.exports = config;
