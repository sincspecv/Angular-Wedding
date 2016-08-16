var weddingInfo = angular.module('weddingInfo', ['ngRoute', 'ngAnimate', 'ngTouch']);

weddingInfo.config(function($routeProvider) {
	$routeProvider

		.when("/", {
			templateUrl : "views/home.htm",
			controller : "viewController"
		})

		.when("/location", {
			templateUrl : "views/location.htm",
			controller : "viewController"
		})
		.when("/lodging", {
			templateUrl : "views/lodging.htm",
			controller : "viewController"
		})
		.when("/registry", {
			templateUrl : "views/registry.htm",
			controller : "viewController"
		});
});

weddingInfo.controller('viewController', ['$scope', '$location', function($scope, $location) {
	$scope.pageClass = 'ng-enter'; 
	$scope.changeView = function(view) {
		$location.path(view);
	}
}]);