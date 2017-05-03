/**
 * Created by Kasun Kavinda on 3/12/2017.
 */
(function (app) {
    app.controller('LoginCtrl',  function($scope, $http, $location) {








        $scope.goCandidate=function () {
            $location.path('/skillPage');

        };
        $scope.goCompany=function () {
            $location.path('/companyRegistration');

        };


       // localStorage.setItem("user", JSON.stringify({"username":"sss", "role":"company"}));


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

        //This is the controller of the Login validation

        /*    loginController.$inject = ['$scope' , 'loginService' , '$state','$window'];

         function loginController($scope , loginService , $state) {

         $scope.login = function () {
         loginService.login($scope.user).then(function success(data) {
         if(data.data.status==httpStatus.OK){
         $state.go('myApp.createdProfile');
         }else{
         $state.go('myApp.login');
         window.alert("Invalid username and password!");
         }
         });
         }         }

         */




        }



    );

    /*function compile(scope, element, attributes,$location) {
        return{
            post:function(scope, element, iAttrs,$location) {
                scope.click=function(path)
                {
                    alert("click"+path);
                    $location.url('/skillPage');
                };
            }
        };
    }

    return({
        compile: compile,
        restrict: 'AE',
    })*/




})(App);


