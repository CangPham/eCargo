//index.js
(function (data) {
    "use strict";
    //using bluebird to promise
    var Promises = require('bluebird');
	var dbConnection = require('./dbConnection.js');

    data.exec = function (params) {
        return new Promises(function (resolve, reject) {
            dbConnection.getDb(function (err, db) {
                db.query(params, function (err, data) {
                    return (err ? reject(err) : resolve(data));
                });
            });
        });
    }
})(module.exports);