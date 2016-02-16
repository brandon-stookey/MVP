'use strict';

angular.module('myApp.createBlog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createBlog', {
    templateUrl: 'createBlog/createBlog.html',
    controller: 'createBlogCtrl'
  });
}])

.controller('createBlogCtrl', ['$scope', 'createBlogFactory', function($scope, createBlogFactory) {
	angular.extend($scope, createBlogFactory);
		
}])
.factory('createBlogFactory', function() {
	var blogs = [];

	var addBlog = function(newBlog){
		blogs.push({title: newBlog}); 
	};

	var done = function(index){
		 todos.splice(index,1);
	}

 return {
	blogs: blogs,
	addBlog: addBlog
 }

});