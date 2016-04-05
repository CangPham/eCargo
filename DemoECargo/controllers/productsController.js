//productsController
(function (productsController) {
	"use strict";
	
	//var data = require('../data');

	productsController.init = function (app) {
		app.get("/api/products/", function (req, res) {
			//data.getProducts(function (err, results) {
			//	res.json(results);
			//});
            res.json({ "test": "hello" });
		});
	};

})(module.exports);