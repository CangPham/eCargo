//productsController
(function (productsController) {
    "use strict";
    
    var data = require('../data');
    var _ = require('lodash');
    
    productsController.init = function (app) {
        var numberProduct = 9;
        
        app.get("/api/products", function (req, res, next) {
            var query = _.join(["SELECT * from products ORDER BY dateCreated DESC LIMIT " , numberProduct]," ");
            data.exec(query)
                .then(function (results) {
                res.json(results);
            })
                .catch(next);
        });
        
        app.get("/api/products/:Id", function (req, res, next) {
            
            var productId = req.params.Id;
            var query = "";
            if (_.isNumber(productId)) {
                query = _.join(["CALL getProductById(", productId, ");"], " ");
            }
                        
            data.exec(query)
                .then(function (results) {
                res.json(results[0]);
            })
                .catch(next);
        });
        
        app.get("/api/productReview/:Id", function (req, res, next) {
            
            var productId = req.params.Id;
            var query = "";
            if (_.isNumber(_.toInteger(productId))) {
                query = _.join(["CALL getReviewByProductId(", productId, ");"], " ");
            }
            
            data.exec(query)
                .then(function (results) {
                res.json(results);
            })
                .catch(next);
        });
        
        app.get("/api/productsByBrandId/:brandId", function (req, res, next) {
            
            var brandId = req.params.brandId;
            var query = "";
            if (_.isNumber(_.toInteger(brandId))) {
                query = _.join(["CALL getProductsByBrandId(", brandId, ",", numberProduct, ");"], " ");
            }
           
            data.exec(query)
                .then(function (results) {
                res.json(results[0]);
            })
                .catch(next);
        });
    };

})(module.exports);