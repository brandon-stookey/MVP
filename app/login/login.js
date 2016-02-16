'use strict';

angular.module('myApp.login', ['ngRoute']) 


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])


.controller('loginCtrl',['$scope','UserName',function($scope, UserName) {
	angular.extend($scope, UserName);
	
}])
.factory('UserName', function() {
	var userName = [];

	var holdUserName = function(username){
		userName.unshift({username: username}); 
		console.log('userName',userName);
	};



 return {
 	userName: userName,
 	holdUserName: holdUserName
 }

});