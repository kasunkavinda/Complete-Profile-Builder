/**
 * Created by Kasun Kavinda on 3/20/2017.
 */

/*(function(app){

    angular
        .module('app')
        .factory('tokenAuthService', tokenAuthService);

    tokenAuthService.$inject = ['$http' , 'serverSettings'];

    function tokenAuthService($http , serverSettings) {


        var webApi = serverSettings.webApi ;

        var service = {
            tokenAuth: tokenAuth
        };

        return service;

        function tokenAuth(token) {
            return $http({
                url: webApi + '/checktoken',
                method: "POST",
                data: {"ss":"wr"},
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError);
        }

        function handleSuccess(res) {
            return res.status;
        }

        function handleError() {
            return function () {
                return 404;
            };
        }



    }






    })(App);*/
