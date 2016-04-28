(function () {
    "use strict";
    
    angular.module("mainApp").controller('productReviewCtrl', productReviewCtrl);

    productReviewCtrl.$inject = ['$scope', 'services', 'notificationFactory'];

    function productReviewCtrl($scope, services, notificationFactory) {
        
        $scope.review = {};
        
        $scope.addReview = function (product) {
            product.reviews.push(this.review);
            
            this.review.productId = product.id;
            
            services.addReview(this.review).then(function (res) {
                notificationFactory.success('Review added.');
            });
            this.review = {};
        };            
    };
})();