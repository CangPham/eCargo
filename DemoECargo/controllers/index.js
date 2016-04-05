//index.js
(function (controllers) {
	"use strict";
	var productsController = require('./productsController.js');
	controllers.init = function (app) { 
		productsController.init(app);
	};
})(module.exports);