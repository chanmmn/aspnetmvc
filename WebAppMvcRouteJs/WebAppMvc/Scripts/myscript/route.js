﻿var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/Scripts/myscript/main.htm"
        })
        .when("/red", {
            templateUrl: "/Scripts/myscript/red.htm"
        //})
        //.when("/green", {
        //    templateUrl: "green.htm"
        //})
        //.when("/blue", {
        //    templateUrl: "blue.htm"
        });
});