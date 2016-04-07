//productsController
(function (productsController) {
	"use strict";
	
	var data = require('../data');

	productsController.init = function (app) {
        app.get("/api/products/", function (req, res, next) {
            var str = "SELECT * from products ORDER BY id DESC LIMIT 10";
            data.exec(str)
                .then(function (results) {
                    //res.set("Content-Type", "application/json");
                    //res.send(results);
                res.json(results);
                })
                .catch(next);            
        });

        app.get("/api/products/:Id", function (req, res, next) {
            
            var productId = req.params.Id;
            var str = "SELECT Name FROM products WHERE id = " + productId;
            data.exec(str)
                .then(function (results) {
                    res.json(results);
                })
                .catch(next);   
        });

        app.get("/api/productsByBrandId/:Id", function (req, res, next) {
            
            var brandId = req.params.Id;
            var str = "CALL getProductsByBrandId(" + brandId + ")";
            data.exec(str)
                .then(function (results) {
                res.json(results);
            })
                .catch(next);
        });
	};

})(module.exports);