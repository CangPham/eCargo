(function () {
    "use strict";
    
    angular.module("mainApp")
        .directive("errorHandler", errorHandler);
    
    function errorHandler() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/common/errorhandler.html',
        };
    };

})();