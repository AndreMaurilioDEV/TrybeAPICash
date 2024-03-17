//connection que recebe um pool de conexões criado com a função createPool.
//Um pool de conexões é um repositório que contém um conjunto de conexões estabelecidas previamente com o banco de dados.

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 33060,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.DB_NAME || 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;