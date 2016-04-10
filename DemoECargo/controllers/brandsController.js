//brandController.js
(function (brandController) {
    "use strict";
    
    var data = require('../data');
    
    brandController.init = function (app) {
        app.get("/api/brands", function (req, res, next) {
            var str = "SELECT id, name FROM brands";
            data.exec(str)
                .then(function (results) {
                    res.json(results);
                })
                .catch(next);
        });
    };
})(module.exports);