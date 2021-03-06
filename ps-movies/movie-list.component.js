(function() {
    "use strict";
    var module = angular.module("psMovies");

    function fetchMovies($http) {
        return $http.get("movies.json")
            .then(function(response) {
                return response.data
            })
    }

    function controller($http) {
        var model = this;
        model.message = "Hello from ctrl component!"
        model.movies = [];

        model.$onInit = function initializer() {
            fetchMovies($http).then(function(movies) {
                model.movies = movies;
            })
        }

        model.upRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1
            }
        }

        model.downRating = function(movie) {
            if (movie.rating > 1) {
                movie.rating -= 1
            }
        }

        model.goToDetails = function(id) {
            model.$router.navigate(["Details", { id: id }, "Overview"]);
        }

        model.setRaiting = function(movie, newRaiting) {
            movie.rating = newRaiting
        }
    }

    module.component("movieList", {
        templateUrl: "ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller],
        bindings: {
            "$router": "<"
        }
    });
})();