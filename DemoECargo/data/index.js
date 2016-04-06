//index.js
(function (data) {
    "use strict";

	var dbConnection = require('./dbConnection.js');
	
    data.getProducts = function (next) {
        var str = "SELECT * FROM products  ORDER BY id";
        query(str, next);
    };
    
    data.getTop10Products = function (next) {
        var str = "SELECT * from products ORDER BY id DESC LIMIT 10";
        query(str, next);
    };

    data.getProductById = function (productId, next) {
        var str = "SELECT * FROM products where Id =" + productId;
        query(str, next);
    };

    function query(strQuery, next){
        dbConnection.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.query(strQuery, function (err, rows) {
                    if (err)
                        next(err, null);
                    else
                        next(null, rows);
                });;
            }
        });
    };
})(module.exports);