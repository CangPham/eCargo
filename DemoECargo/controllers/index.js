//index.js
(function (controllers) {
    "use strict";
    
    var brandsController = require('./brandsController.js');
    var productsController = require('./productsController.js');
    var productReviewController = require('./productReviewController.js');
    controllers.init = function (app) { 
        brandsController.init(app);
        productsController.init(app);
        productReviewController.init(app);
	};
})(module.exports);