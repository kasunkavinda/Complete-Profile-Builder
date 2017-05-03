/**
 * Created by Kasun Kavinda on 3/8/2017.
 */


 var App = angular.module("myApp",['ngRoute']);



/*App.config(['$routeProvider', function($routeProvider){

    //this loads up our routes dynamically from the previous object
    for(var path in window.routes) {
        $routeProvider.when(path, window.routes[path]);
    }
    $routeProvider.otherwise({redirectTo: '/login'});

}]).run(function(){

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        for(var i in window.routes) {
            if(next.indexOf(i) != -1) {
                if(window.routes[i].requireLogin && !SessionService.getUserAuthenticated()) {
                    alert("You need to be authenticated to see this page!");
                    event.preventDefault();
                }
            }
        }
    });

});*/

