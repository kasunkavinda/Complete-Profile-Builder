/**
 * Created by Kasun Kavinda on 3/9/2017.
 */

//var myApp = angular.module('myApp', ['ngRoute']);
(function (app){

       app.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.
                when('/login', {
                    templateUrl: 'app/components/loginPage/login.html',
                    controller: 'LoginCtrl',
                }).
                when('/skillPage', {
                    templateUrl: 'app/components/skillPage/skillPage.html',
                    controller: 'skillController',

                   /* resolve:{
                        "check" : function() {
                            if(localStorage.getItem("user") == null || localStorage.getItem("user") == undefined) {
                                $location.path("/login");
                            }
                        }
                    }*/








                }).
                when('/companyRegistration', {
                    templateUrl : 'app/components/companyRegistration/companyRegistration.html',
                    controller: 'CompanyRegController',


                }).
                when('/companyTemplate', {
                    templateUrl : 'app/components/companyTemplate/companyTemplate.html',
                    controller: 'CompanyCtrl',
                    resolve:{
                        "check":function(accessFac,$location){   //function to be resolved, accessFac and $location Injected
                            if(accessFac.checkPermission()){    //check if the user has permission -- This happens before the page loads
                                alert("access allowed");
                            }else{
                                $location.path('/');                //redirect user to home if it does not have permission.
                                alert("You don't have access here");
                            }
                        }
                    }
                }).
                when('/getData', {
                    templateUrl : 'app/components/getData/getData.html',
                    controller: 'StudentCtrl',

                }).
                when('/createdProfile', {
                    templateUrl : 'app/components/createdProfile/createdProfile.html',
                    controller: 'displayCtrl',
                    resolve:{
                        "check":function(accessFac,$location){   //function to be resolved, accessFac and $location Injected
                            if(accessFac.checkPermission()){    //check if the user has permission -- This happens before the page loads
                                alert("access allowed");
                            }else{
                                $location.path('/');                //redirect user to home if it does not have permission.
                                alert("You don't have access here");
                            }
                        }
                    }

                }).
                /*when('/cv', {
                    templateUrl: 'app/components/cv/cv.html',
                }
                )*/









                otherwise({
                    redirectTo: '/login'
                });

               /* app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
                    cfpLoadingBarProvider.includeSpinner = false;
                    cfpLoadingBarProvider.latencyThreshold = 1;
                }])
                    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
                        $rootScope.$on('$stateChangeSuccess',function(){
                            document.body.scrollTop = document.documentElement.scrollTop = 0;
                        });
                        $rootScope.$state = $state;
                        return $rootScope.$stateParams = $stateParams;
                    }]);*/













            }]);


      /*app.run(['$rootScope', '$location', '$cookieStore', '$http',
           function ($rootScope, $location, $cookieStore, $http) {
               // keep user logged in after page refresh
               $rootScope.globals = $cookieStore.get('globals') || {};
               if ($rootScope.globals.currentUser) {
                   $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
               }

               $rootScope.$on('$locationChangeStart', function (event, next, current) {
                   // redirect to login page if not logged in
                   if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                       $location.path('/login');
                   }
               });
           }]);*/



        /*app.factory('accessFac',function(){
            var obj = {}
            this.access = false;
            obj.getPermission = function(){    //set the permission to true
                this.access = true;
            }
            obj.checkPermission = function(){
                return this.access;             //returns the users permission level
            }
            return obj;
        });

        app.controller('testCtrl',function($scope,accessFac){
            $scope.getAccess = function(){
                accessFac.getPermission();       //call the method in acccessFac to allow the user permission.
            }
        });*/


        /*localStorage.setItem("user", JSON.stringify(user));

        //url change
        if(localStorage.getItem("user") != null || localStorage.getItem("user") != undefined) {
            //change url
        } else {
            //no url change
        }
*/
        app.factory('accessFac',function(){
            var obj = {}
            this.access = false;

            obj.getPermission = function(){    //set the permission to true
                this.access = true;
            }
            obj.checkPermission = function(){
                return this.access;             //returns the users permission level
            }
            return obj;
        });

        app.controller('testCtrl',function($scope,accessFac){
            $scope.getAccess = function(){
                accessFac.getPermission();       //call the method in acccessFac to allow the user permission.
            }
        });

       }
)(App);