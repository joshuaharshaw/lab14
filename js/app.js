var app = angular.module("catApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider.when("/cats", {
		templateUrl: "../cat.html"
	}).when("/dogs", {
		templateUrl:"../dog.html"
	});
});
