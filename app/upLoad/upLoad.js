 'use strict';
 angular.module('myApp.upLoad', ['ngRoute','ngFileUpload', 'ngImgCrop'])

// var app = angular.module('fileUpload', ['ngFileUpload', 'ngImgCrop']);

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upLoad', {
    templateUrl: 'upLoad/upload.html',
    controller: 'myCtrl'
  });
}])

.controller('myCtrl', ['$scope', 'upLoadFactory', function ($scope,  upLoadFactory) {

    angular.extend($scope, upLoadFactory);



}])
.factory('upLoadFactory',['Upload', '$timeout', function(Upload, $timeout) {
    var imageUrl = [];
    var upload = function (dataUrl) {
        imageUrl.push({url: dataUrl});
        // console.log('imagUrl ', imageUrl);
// console.log('dataUrl ', dataUrl);
    // Upload.upload({
    //     url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
    //     data: {
    //         file: Upload.dataUrltoBlob(dataUrl)
    //     },
    // }).then(function (response) {
    //     $timeout(function () {

    //         console.log('response.data ', response.data);
    //         var result = response.data;
    //     });
    // }, function (response) {
    //     if (response.status > 0) $scope.errorMsg = response.status 
    //         + ': ' + response.data;
    // }, function (evt) {
    //     var progress = parseInt(100.0 * evt.loaded / evt.total);
    // });
}

 return {
    upload: upload,
    imageUrl: imageUrl
 }

}]);








