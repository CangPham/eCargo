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
//"use strict";
////angular.module("mainApp")
////        .controller("productsCtrl", ["$scope", "$window", "$http", 
////    function ($scope, $window, $http) {
////        $scope.products = [];
        
////        var urlParts = $window.location.pathname.split("/");
        
////        var productsUrl = "http://localhost:2000/api/products/";
////        $http.get(productsUrl)
////                .then(function (result) {
////            $scope.products = result.data;
////        }, function (err) {
////            alert(err);
////        })
////    }
////]);

//angular.module("mainApp",[]).controller('productsCtrl', function ($scope, $http) {
//    //$http.get('http://localhost:2000/api/products/')
//    //.then(function (data) { 
//    //    $scope.products = data;
//    //});
//    $scope.products = [{"id":1, "name": "cang"}, { "id": 2, "name": "cang1"}];
//});