(function () {
    "use strict";
    angular.module("mainApp").controller("productsCtrl", productsCtrl);
    
    productsCtrl.$inject = ["$scope","$routeParams", "services", "notificationFactory"];
    
    function productsCtrl($scope, $routeParams, services, notificationFactory) {
        $scope.products = [];
       
        if ($routeParams.brandId) {
            services.getProductsByBrandId($routeParams.brandId).then(function (data) {
                $scope.products = data;
                notificationFactory.success('Products loaded.');
            });
        }
        else {
            services.getProducts().then(function (data) {
                $scope.products = data;
                notificationFactory.success('Products loaded.');
            });
        }
        
    };
})();