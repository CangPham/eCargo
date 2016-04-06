//productsController
(function (productsController) {
	"use strict";
	
	var data = require('../data');

	productsController.init = function (app) {
        app.get("/api/products/", function (req, res) {
            data.getTop10Products(function (err, results) {
                res.set("Content-Type", "application/json");
                res.send(results);
			});            
        });

        app.get("/api/products/:Id", function (req, res) {
            
            var productId = req.params.Id;
            data.getProductById(productId, function (err, results) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(results);
                }
            });
        });
	};

})(module.exports);