/**
 * Created by Kasun Kavinda on 3/8/2017.
 */



/*
var myApp = angular.module("myApp", []);

myApp.controller("skillController", ['$scope', '$http', function($scope, $http) {
    $scope.companies =[];
    $scope.a = false;

    $scope.addRowAsyncAsJSON = function(){
        $scope.companies.push({ 'firstName':$scope.firstName, 'lastName': $scope.lastName, 'password':$scope.password, 'cPassword':$scope.cPassword, 'email':$scope.email, 'address':$scope.address, 'dob':$scope.dob });
        // Writing it to the server
        //
        var dataObj = {
            firstName : $scope.firstName,
            lastName : $scope.lastName,
            cPassword : $scope.cPassword,
            email : $scope.email,
            address : $scope.address,
            dob : $scope.dob,
        };

        $scope.a = true;

        console.log(JSON.stringify(dataObj));
        // console.log("tebbjabfjhl");

        var res = $http.post('/userprofile', dataObj);
        res.success(function(data, status, headers, config) {
            console.log(JSON.stringify(data));
            $scope.message = data;
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
        // Making the fields empty
        //
        $scope.firstName='';
        $scope.lastName='';
        $scope.cPassword='';
        $scope.email='';
        $scope.address='';
        $scope.dob='';




    };
    $scope.submit = function () {
        console.log('test submit');
    }
}]);
*/


