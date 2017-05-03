/**
 * Created by Kasun Kavinda on 3/17/2017.
 */


(function(app){


    app.controller('StudentCtrl', ['$scope', 'StudentService',
        // we inject StudentService  inject because we call getAll method for get all student
        function ($scope, StudentService) {
            // this is base url
            var baseUrl = '/api/student/';
            // get all student from database
            $scope.getStudents=function()
            {
                var apiRoute = baseUrl + 'GetStudents/';
                var _student = StudentService.getAll(apiRoute);
                _student.then(function (response) {
                        $scope.students = response.data;
                    },
                    function (error) {
                        console.log("Error: " + error);
                    });

            }
            $scope.getStudents();

        }]);









})(App);