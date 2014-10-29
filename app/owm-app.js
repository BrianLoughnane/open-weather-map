var OWMapp = angular.module('OWMapp', ['ngRoute']);

OWMapp.value('owmCities', ['New York', 'Dallas', 'Chicago']);

OWMapp.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateURL: './home.html',
			controller: 'HomeCtrl'
		}).when('/cities/:city', {
			templateURL: './city.html',
			controller: 'CityCtrl',
			resolve: {
				city: function (owmCities, $route, $location) {
					var city = $route.current.params.city;
					if(owmCities.indexOf(city) == -1) {
						$location.path('/error');
						return;
					}
					return city;
				}
			}
		}).when('/error', {
			template: '<p>Error Page Not Found</p>'
		});
	});

OWMapp.controller('HomeCtrl', function($scope) {

	});

OWMapp.controller('CityCtrl', function($scope, $routeParams,owmCities) {
		$scope.city = $routeParams.city;
	});

