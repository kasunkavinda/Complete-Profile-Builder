/**
 * Created by Chami on 3/10/2017.
 */
(function (app) {
    app.controller("CompanyCtrl", ['$scope', '$http','$location', function ($scope, $http, $location) {

        $scope.logOutCompanyTemplate=function () {
            $location.path('/login');
        };



        $scope.companies = [];
        $scope.a = false;

        $scope.searchSelectedCandidates = function () {
            $scope.companies.push({

                'companyName' : $scope.companyName,
                'job_title': $scope.job_title,
                'noOfVacancies': $scope.noOfVacancies,
                'skill_type': $scope.skill_type,
                'req_rate': $scope.req_rate

            });
            // Writing it to the server
            //

            var dataObj = {

                companyName:$scope.companyName,
                job_title: $scope.job_title,
                noOfVacancies: $scope.noOfVacancies,
                skills: $scope.skills,
                req_rate: $scope.skills
            };

            $scope.a = true;

            console.log(JSON.stringify(dataObj));
            // console.log("tebbjabfjhl");

            var res = $http.post('/search', dataObj);
            res.success(function (data, status, headers, config) {
                console.log(JSON.stringify(data));
                $scope.message = data;
            });
            res.error(function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({data: data}));
            });


            $scope.companyName='';
            $scope.job_title = '';
            $scope.noOfVacancies = '';
            $scope.skill_type = '';
            $scope.level = '';


        }
        ;
        $scope.submit = function () {
            console.log('test submit');
        }

        // =======================================================================================================================
        $scope.skills = [];
        $scope.addRow = function () {
            $scope.skills.push({'skill_type': $scope.skill_type, 'selectedOption': $scope.selectedOption});
            $scope.skill_type = '';
            $scope.select = '';

        };
        $scope.removeRow = function (skill_type) {
            var index = -1;
            var skillArr = eval($scope.skills);
            for (var i = 0; i < skillArr.length; i++) {
                if (skillArr[i].skill_type === skill_type) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.skills.splice(index, 1);
        };
        //=====================================================================================================================
        /*$scope.skill_type = '';
         $scope.snames = ["Java", "HTML", "MYSQL", "C++", "Python", "Spring", "AngularJs","NodeJs"];
         */
        //=======================================================================================================================
        $scope.options = [{text: 'Beginner'}, {text: 'Intermediate'}, {text: 'Expert'}];


        //====================================================================================================================
        /*  $scope.submitForm = function(isValid) {

         // check to make sure the form is completely valid
         if (isValid) {
         alert('our form is amazing');
         }



         };*/

        //=============================================================================================================

        /* $scope.companyRegisters =[];
         $scope.a = false;

         $scope.addToDataBase = function() {
         $scope.companyRegisters.push({
         'uname': $scope.uname,
         'pswrd': $scope.pswrd,
         'cpswrd': $scope.cpswrd,
         'email': $scope.email,
         'cname': $scope.cname,
         'location': $scope.location,
         'phone': $scope.phone
         });
         // Writing it to the server
         //

         var dataObj = {
         uname: $scope.uname,
         pswrd: $scope.pswrd,
         cpswrd: $scope.cpswrd,
         email: $scope.email,
         cname: $scope.cname,
         location: $scope.location,
         phone: $scope.phone
         };

         $scope.a = true;

         console.log(JSON.stringify(dataObj));
         // console.log("tebbjabfjhl");

         var res = $http.post('/userprofile', dataObj);
         res.success(function (data, status, headers, config) {
         console.log(JSON.stringify(data));
         $scope.message = data;
         });
         res.error(function (data, status, headers, config) {
         alert("failure message: " + JSON.stringify({data: data}));
         });


         $scope.uname = '';
         $scope.pswrd = '';
         $scope.cpswrd = '';
         $scope.email = '';
         $scope.cname = '';
         $scope.location = '';
         $scope.phone = '';


         };
         */
        //===========================================================================================================
        $scope.getData = function ($scope, viewRecordService, $state, $http, $filter, serverSettings, $window) {
            var self = this;
            var webApi = serverSettings.webApi;
            viewRecordService.recordDetails.then(function (records) {
                $scope.records = records;
                console.log($scope.records);
            });

            $scope.viewRecordService = function ($http, serverSettings, $filter) {
                var webApi = serverSettings.webApi;

                return {
                    recordDetails: $http.get(webApi + '/records').then(function (records) {
                        return (records.data.records);
                    })
                };

            }
        }

    }]);
})(App);


