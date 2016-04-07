//eCargoApp.js
(function (angular) {
    "use strict";
    var app = angular.module("mainApp", ['ngRoute']);

        app.controller("productsCtrl", ["$scope", "$window", "$http",
        function ($scope, $window, $http) {
            $scope.products = [];
            
            var urlParts = $window.location.pathname.split("/");
            
            var productsUrl = "/api/products/";
            $http.get(productsUrl)
                .then(function (result) {
                $scope.products = result.data;
            }, function (err) {
                alert(err);
            })
        }
    ]);
    
    app.controller("ProductDetailCtrl",[])

    app.directive("productTitle", function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/view/product-title.html',
        };
    })

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
        when('/products', {
                templateUrl: '/view/products.html',
                controller: 'productsCtrl'
            }).
        when('/products/:productId', {
                templateUrl: '/view/product-details.html',
                controller: 'ProductDetailCtrl'
            }).
        otherwise({
                redirectTo: '/products'
            });
        }]);
})(window.angular);