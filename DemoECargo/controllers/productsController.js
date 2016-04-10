//productsController
(function (productsController) {
    "use strict";
    
    var data = require('../data');
    
    productsController.init = function (app) {
        var numberProduct = 9;
        
        app.get("/api/products", function (req, res, next) {
            var str = "SELECT * from products ORDER BY dateCreated DESC LIMIT " + numberProduct;
            data.exec(str)
                .then(function (results) {
                res.json(results);
            })
                .catch(next);
        });
        
        app.get("/api/products/:Id", function (req, res, next) {
            
            var productId = req.params.Id;
            var str = "CALL getProductById(" + productId +")";
            data.exec(str)
                .then(function (results) {
                res.json(results[0]);
            })
                .catch(next);
        });
        
        app.get("/api/productReview/:Id", function (req, res, next) {
            
            var productId = req.params.Id;
            var str = "CALL getReviewByProductId(" + productId + ")";
            data.exec(str)
                .then(function (results) {
                res.json(results);
            })
                .catch(next);
        });
        
        app.get("/api/productsByBrandId/:brandId", function (req, res, next) {
            
            var brandId = req.params.brandId;
            var str = "CALL getProductsByBrandId(" + brandId + "," + numberProduct + ")";
            data.exec(str)
                .then(function (results) {
                res.json(results[0]);
            })
                .catch(next);
        });
    };

})(module.exports);