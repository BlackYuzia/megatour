var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "client/main.html",
            controller: "toursController"
        })
        .when("/about", {
            templateUrl: "client/about.html",
            controller: "aboutController"
        })
        .when("/tours", {
            templateUrl: "client/tours.html",
            controller: "toursController"
        });
});