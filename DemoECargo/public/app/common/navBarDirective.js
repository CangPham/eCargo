(function () {
    "use strict";
    
    angular.module("mainApp")
        .directive("navBar", navbar);
    navbar.$inject = ["services"];

    function navbar(services) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/common/navbar.html',
            link: link
        };

        function link(scope) {
            services.getBrands().then(function (data) {
                scope.brands = data;
            });
        };
    };    
})();