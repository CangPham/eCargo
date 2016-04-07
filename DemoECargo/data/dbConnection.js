//dbConnection.js
(function (dbConnection) {
    "use strict";

    var mysql = require('mysql');
	var theDb = null;
    dbConnection.getDb = function (next) {
        if (!theDb) {
            var connection = mysql.createConnection({
                connectionLimit: 100,
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ecargo'
            });
            connection.connect(function (err) {
                if (err) {
                    console.log('Error connecting to Db');
                    return;
                }
                console.log('Connection established');
            });
            theDb = connection;
            next(null, theDb);
        } else {
            next(null, theDb);
        }
    };   

})(module.exports);