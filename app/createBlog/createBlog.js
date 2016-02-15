'use strict';

angular.module('myApp.createBlog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createBlog', {
    templateUrl: 'createBlog/createBlog.html',
    controller: 'createBlogCtrl'
  });
}])

.controller('createBlogCtrl', ['$scope', function($scope) {
	$scope.blogs = [];

	$scope.addBlog = function(newBlog){
		$scope.blogs.push({title: newBlog});
		$scope.textareaValue = '';
	};

	$scope.done = function(index){
		$scope.todos.splice(index,1);
	}
		
}]);
// .factory('myService', function() {
//  var savedData = {}
//  function set(data) {
//    savedData = data;
//  }
//  function get() {
//   return savedData;
//  }

//  return {
//   set: set,
//   get: get
//  }

// });