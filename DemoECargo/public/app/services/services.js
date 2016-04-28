(function () {
    'use strict';
    
    angular.module("mainApp")
    .factory('services', ['$http', '$q', 
        function ($http, $q) {
            
            var service = {
                getProducts: getProducts,
                getBrands : getBrands,
                getUserIdByEmail: getUserIdByEmail,
                getProductById: getProductById,  
                getReviewByProductId: getReviewByProductId,               
                getProductsByBrandId: getProductsByBrandId,
                addReview: addReview
            };
            
            return service;
            
            function getProducts(){
                return $http.get("api/products")
                    .then(function (result) {
                    return result.data;
                });
            };
            
            function getProductById(id){
                var data = { params: { id: id } };
                return $http.get("/api/products/", data)
                    .then(function (result) {
                    return result.data[0];
                });
            };
            
            function getReviewByProductId(id){
                return $http.get("/api/productReview/" + id)
                    .then(function (result) {
                    return result.data[0];
                });
            };
            
            function getBrands(){
                return $http.get("/api/brands")
                    .then(function (result) {
                    return result.data;
                });
            };
            
            function getUserIdByEmail(email){
                var data = { params: { email: email } };
                return $http.get("/api/getUserIdByEmail", data);
            };
            
            function getProductsByBrandId(brandId){
                var data = { params: { brandId: brandId } };
                return $http.get("/api/productsByBrandId/" + brandId)
                    .then(function (result) {
                    return result.data;
                });
            };
            
            function addReview(data){
                return $http.post("/api/addReview", data);
            };

        }])        

        // Decorate the service. Because we can do this outside of the service, we can also use this for built-in or third-party services.
        .config(['errorHandlerProvider', '$provide', function (errorHandlerProvider, $provide) {
            errorHandlerProvider.decorate($provide, ['services']);
        }]);
})();