"use strict";
var mysql = require('mysql');
var pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
var getSQLConnection = function () {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(connection);
            }
        });
    });
};
module.exports = getSQLConnection;
//# sourceMappingURL=db.js.map