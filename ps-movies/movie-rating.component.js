(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieRating", {
        templateUrl: "ps-movies/movie-rating.component.html",
        bindings: {
            value: "<"
        },
        transclude: true,
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.$onInit = function () {
                model.entires = new Array(model.value);
            }
            
            model.$onChanges = function () {
                model.entires = new Array(model.value);
            }
        }

    })

})();