//eCargoApp.js
(function (angular) {
    "use strict";
    angular.module("mainApp",[])
        .controller("productsCtrl", ["$scope","$window", "$http",
        function ($scope, $window, $http) {
            $scope.products = [];

            var urlParts = $window.location.pathname.split("/");

            var productsUrl = "/api/products/";
            $http.get(productsUrl)
                .then(function (result){
                    $scope.products = result.data;
            }, function (err) { 
                alert(err);
            })
        }
    ]);
})(window.angular);