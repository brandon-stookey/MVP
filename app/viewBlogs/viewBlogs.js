'use strict';

angular.module('myApp.viewBlogs', ['ngRoute']) //when creating this module, might have to include other module as a dependcy
//create a service as a third module
//first one manages creations
//this one manages view
//third one will hang on to data
	//service module would bea  dependcy on line 3

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewBlogs', {
    templateUrl: 'viewBlogs/viewBlogs.html',
    controller: 'viewBlogsCtrl'
  });
}])

.controller('viewBlogsCtrl',['$scope','createBlogFactory','UserName', function($scope, createBlogFactory, UserName) {
	$scope.userNames = UserName.userName;
	$scope.blogs = createBlogFactory.blogs;
	$scope.titles = createBlogFactory.titles;
	
}]);