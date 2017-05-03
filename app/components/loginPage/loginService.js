/**
 * Created by Kasun Kavinda on 3/8/2017.
 */

/*var myApp = angular.module("myApp", []);

myApp.controller("loginController", ['$scope', '$http', function($scope, $http) {
    $scope.companies =[];
    $scope.a = false;

    $scope.addLogin = function(){
        $scope.companies.push({ 'name':$scope.name, 'password': $scope.password });
        // Writing it to the server
        //
        var dataObj = {
            name : $scope.name,
            password : $scope.password,

        };

        $scope.a = true;

        console.log(JSON.stringify(dataObj));
        // console.log("tebbjabfjhl");

        var res = $http.post('/userprofile1', dataObj);
        res.success(function(data, status, headers, config) {
            console.log(JSON.stringify(data));
            $scope.message = data;
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
        // Making the fields empty
        //
        $scope.name='';
        $scope.password='';

    };
    $scope.submit = function () {
        console.log('test submit');
    }
}]);*/
