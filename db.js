var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

var connect = function (callback) {
    pool.getConnection((error, connection) => {
        callback(error, connection)
    })
}

module.exports = connect;