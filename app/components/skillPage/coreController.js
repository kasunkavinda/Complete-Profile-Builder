/**
 * Created by Kasun Kavinda on 3/10/2017.
 */


/*var myApp = angular.module("myApp", []);*/






// =============================================================================


/*myApp.controller("coreController", function($scope) {
    $scope.cores = [];
    $scope.addRow = function(){
        $scope.cores.push({ 'skillName':$scope.skillName, 'skillLevel': $scope.skillLevel, 'type':$scope.type, 'stream' : $scope.stream, 'status' : $scope.status});
        $scope.skillName='';
        $scope.skillLevel='';
        $scope.type='';
        $scope.stream='';
        $scope.stream='';
        $scope.status='';

    }});

// ==========================================================================================
myApp.controller('UploadCtrl', ['$scope', function ($scope) {
    $scope.image = "";
}]).

directive('myUpload', [function () {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.image = e.target.result;
                $scope.$apply();
            }

            elem.on('change', function() {
                reader.readAsDataURL(elem[0].files[0]);
            });
        }
    };
}]);*/

// ============================================================================

/*
myApp.config(function($routeProvider){
    {

        $routeProvider
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'loginController'

            })
            .when('/skillPage', {
                templateUrl: 'skillPage.html',
                controller: 'skillController'
            })
            .otherwise({
                templateUrl: 'login.html',
                controller: 'loginController'
            });
        // $locationProvider.html5Mode(true);

    }}
)
*/

// ======================================================================================



// =======================================================================================



// ===========================================================================================

/*
angular.module('myApp', []).

controller('UploadCtrl', ['$scope', function (scope) {
    scope.image = "";
}]).

directive('myUpload', [function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var reader = new FileReader();
            reader.onload = function (e) {
                scope.image = e.target.result;
                scope.$apply();
            }

            elem.on('change', function() {
                reader.readAsDataURL(elem[0].files[0]);
            });
        }
    };
}]);*/
