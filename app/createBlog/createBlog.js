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
	var titles =[];

	var addTitle = function(title){
		titles.push({title: title}); 
		console.log('titles', titles);
	};

	var addBlog = function(newTitle, newBlog){
		blogs.unshift({title: newTitle, text: newBlog }); 
		console.log('blogs', blogs);
	};

	var done = function(index){
		 todos.splice(index,1);
	}

 return {
	blogs: blogs,
	addBlog: addBlog,
	addTitle:addTitle,
	titles: titles
 }

});