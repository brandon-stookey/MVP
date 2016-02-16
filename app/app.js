'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngFileUpload',
  'ngImgCrop',
  'myApp.createBlog',
  'myApp.viewBlogs',
  'myApp.signup',
  'myApp.login',
  'myApp.version',
  'myApp.upLoad'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({
    	redirectTo: '/createBlog'
    });
}]);
