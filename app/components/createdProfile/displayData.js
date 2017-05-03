/**
 * Created by Kasun Kavinda on 3/16/2017.
 */


(function(app){
    app.controller("displayCtrl", ['$scope', '$http', '$location','shareData', function($scope, $http, $location,shareData) {

        $scope.cores=shareData.getExamData1();
        $scope.cores2=shareData.getExamData2();
		$scope.skills=shareData.getSkillData();
		console.log($scope.skills);



        $scope.firstname = localStorage.getItem("firstname");
        $scope.lastName = localStorage.getItem("lastName");
        $scope.name = localStorage.getItem("name");
        $scope.country = localStorage.getItem("country");
        $scope.gender = localStorage.getItem("gender");
        $scope.email = localStorage.getItem("email");
        $scope.phone = localStorage.getItem("phone");
        $scope.image = localStorage.getItem("image");

        $scope.LogOutProfile=function () {
            $location.path('/login');
        };

        $scope.goFirst=function () {
            $location.path('/login');
        };





    }]);

})(App);