//productReviewController.js
(function (productReviewController) {
    "use strict";
    
    var data = require('../data');
    
    productReviewController.init = function (app) {
        app.post("/api/addReview", function (req, res, next) {
            console.log(req.body);
            var email = req.body.Email,
                productId = req.body.productId,
                rating = req.body.Rating,
                comment = req.body.Comment;
            var str = "call addReview('" + email + "'," + productId + "," + rating + ",'" + comment + "')";
            data.exec(str)
                .then(function (results) {
                res.json(results);
            })
                .catch(next);
        });
    };
})(module.exports);