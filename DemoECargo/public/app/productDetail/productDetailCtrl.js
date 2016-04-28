(function () {
    "use strict";
    
    angular.module("mainApp").controller('productDetailCtrl', productDetailCtrl);
    
    productDetailCtrl.$inject = ['$scope', '$routeParams', 'services', "notificationFactory"];
    
    function productDetailCtrl($scope, $routeParams, services, notificationFactory) {
        $scope.product = {};
        $scope.product.reviews = {};
        
        services.getProductById($routeParams.productId)
        .then(function (data) {
            $scope.product = data;
            
        }).then(function () {
            services.getReviewByProductId($routeParams.productId).then(function (data) {
                $scope.product.reviews = data;
                notificationFactory.success('Product loaded.');
            });
           
        });
        
        $scope.validateEmail = validateEmail;
        
        function validateEmail(email) {
            var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $scope.invalidEmail = !reg.test(email);
        }
        
        $scope.getNumber = function (num) {
            return new Array(num);
        }
    };
})();