var mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'pg',
    database: 'saboroso',
    password: 'admin'
});

module.exports = connection;