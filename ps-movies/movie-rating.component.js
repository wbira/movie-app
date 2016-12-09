(function () {
    "use strict";

    var module = angular.module("psMovies");

    function buildEntries(value, max) {
        var entires = [];
        for (var i = 1; i <= max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entires.push(icon);
        }
        return entires;
    }

    module.component("movieRating", {
        templateUrl: "ps-movies/movie-rating.component.html",
        bindings: {
            value: "<",
            max: "<",
            setRaiting: "&"
        },
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.$onInit = function () {
                model.entires = buildEntries(model.value, model.max);
            }

            model.$onChanges = function () {
                model.entires = buildEntries(model.value, model.max);
            }
        }

    })

})();