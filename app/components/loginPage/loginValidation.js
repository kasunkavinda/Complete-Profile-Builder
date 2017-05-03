/**
 * Created by Kasun Kavinda on 3/8/2017.
 */

(function () {
    'use strict';


    angular
        .module('myApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope' , 'loginService' , '$state','$window'];

    function loginController($scope , loginService , $state) {

        $scope.login = function () {
            loginService.login($scope.user).then(function success(data) {
                if(data.data.status==201){
                    $state.go('myApp.createdProfile');
                }else{
                    $state.go('myApp.login');
                    window.alert("Invalid username and password!");
                }
            });
        }
    }

})();