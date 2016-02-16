'use strict';

angular.module('myApp.signup', ['ngRoute']) 


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'login/signup.html',
    controller: 'signupCtrl'
  });
}])


.controller('signupCtrl',['$scope','createBlogFactory',function($scope, createBlogFactory) {
	// $scope.blogs = createBlogFactory.blogs;
	// $scope.titles = createBlogFactory.titles;
	
}]);