(function () {
    "use strict";
    
    angular.module("mainApp")
        .directive("productTitle", productTitle);

    function productTitle() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/product/product-title.html',
        };
    };

})();