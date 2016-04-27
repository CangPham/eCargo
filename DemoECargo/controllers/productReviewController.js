//productReviewController.js
(function (productReviewController) {
    "use strict";
    
    var data = require('../data');
    var _ = require('lodash');
    
    productReviewController.init = function (app) {
        app.post("/api/addReview", function (req, res, next) {
            var email = req.body.email,
                productId = req.body.productId,
                rating = req.body.rating,
                comment = req.body.comment;
            
            var query = "";
            if (_.isNumber(_.toInteger(productId))) {
                query = _.join(["CALL addReview('", email, "',", productId, ",", rating, ",'", comment, "');"], " ");
            }

            data.exec(query)
                .then(function (results) {
                res.json(results);
            })
                .catch(next);
        });
    };
})(module.exports);