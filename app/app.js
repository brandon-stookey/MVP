'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.createBlog',
  'myApp.viewBlogs',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({
    	redirectTo: '/createBlog'
    });
}]);
