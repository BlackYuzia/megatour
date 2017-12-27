var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "client/main.html",
            controller: "mainController"
        })
        .when("/about", {
            templateUrl: "client/about.html",
            controller: "aboutController"
        })
        .when("/tours", {
            templateUrl: "client/tours.html",
            controller: "toursController"
        })
        // .when("/blue", {
        //     templateUrl: "client/blue.html",
        //     controller: "mainController"
        // });
});