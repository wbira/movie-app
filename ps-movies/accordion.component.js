(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("accordion", {
        transclude: true,        
        templateUrl: "ps-movies/accordion.component.html"
    })

    module.component("accordionPanel", {
        transclude: true,
        templateUrl: "ps-movies/accordion-panel.component.html"
    })


})();