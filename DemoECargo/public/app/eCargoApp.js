//eCargoApp.js
(function () {
    "use strict";
    angular.module("mainApp", ['ngRoute', 'eCargo.errorHandler'])
    
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
        when('/products', {
                templateUrl: 'app/product/products.html',
                controller: 'productsCtrl'
            }).
        when('/products/:productId', {
                templateUrl: 'app/productDetail/product-details.html',
                controller: 'productDetailCtrl'
            }).
        when('/products/brands/:brandId', {
                templateUrl: 'app/product/products.html',
                controller: 'productsCtrl'
            }).
        otherwise({
                redirectTo: '/products'
            });
        }])

    .run(function ($rootScope, errorHandler) {
        $rootScope.errorHandler = errorHandler;
    });
})();