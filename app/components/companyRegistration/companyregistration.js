/**
 * Created by Chami on 3/15/2017.
 */

(function(app){






    app.controller("CompanyRegController", ['$scope', '$http', '$location','accessFac', function ($scope, $http, $location, accessFac) {

        $scope.logOutCompanyRegistration=function () {
            $location.path('/login');
        };

        $scope.goTemplate=function () {
            accessFac.getPermission();

            $location.path('/companyTemplate');
        };



        $scope.companyRegisters = [];
        $scope.a = false;


        //===========================================================================================================
        $scope.submitForm = function (isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }


        };
//=========================================================================================================================
        $scope.givePopUp = function () {

                           swal("Submitted Successfully!!", "Your details  has been added sucessfully.", "success");


        }
        //========================================================================================================================


        $scope.disable_buttons = false;
        $scope.addToDataBase = function () {
            $scope.companyRegisters.push({
                'com_userName': $scope.com_userName,
                'com_UserPassword': $scope.com_UserPassword,
                'com_email': $scope.com_email,
                'com_CompanyName': $scope.com_CompanyName,
                'com_location': $scope.com_location,
                'com_telNo': $scope.com_telNo
            });
            // Writing it to the server
            //

            var dataObj = {
                com_userName: $scope.com_userName,
                com_UserPassword: $scope.com_UserPassword,
                com_email: $scope.com_email,
                com_CompanyName: $scope.com_CompanyName,
                com_location: $scope.com_location,
                com_telNo: $scope.com_telNo
            };

            $scope.a = true;

            console.log(JSON.stringify(dataObj));
            // console.log("tebbjabfjhl");

            var res = $http.post('/companyusers', dataObj);
            res.success(function (data, status, headers, config) {
                console.log(JSON.stringify(data));
                $scope.message = data;
            });
            res.error(function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({data: data}));
            });


            $scope.com_userName = '';
            $scope.pswrd = '';
            $scope.com_UserPassword = '';
            $scope.com_email = '';
            $scope.com_CompanyName = '';
            $scope.com_location = '';
            $scope.com_telNo = '';
            $scope.disable_buttons = true;

        }



        //=============================================================================================================================

        $scope.com_userName = '';

        $scope.getCompanyUserName = function () {
            console.log($scope.com_userName);
            return $scope.com_userName;
        };

    }]);
})(App);