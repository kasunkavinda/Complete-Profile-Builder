/**
 * Created by Kasun Kavinda on 3/13/2017.
 */


// This is the controller of the registration form (service to the backend)




(function(app){
    app.controller("skillController", ['$scope', '$http', '$location','shareData','accessFac', function($scope, $http, $location,shareData, accessFac) {


        $scope.goLogout=function () {
            $location.path('/login');
        };

        $scope.save=function () {


            localStorage.setItem("firstname",$scope.firstname);
            localStorage.setItem("lastName",$scope.lastName);
            localStorage.setItem("name",$scope.name);
            localStorage.setItem("country",$scope.country);
            localStorage.setItem("gender",$scope.gender);
            localStorage.setItem("email",$scope.email);
            localStorage.setItem("phone",$scope.phone);



            $location.path('/createdProfile');
        };




        // $scope.data = Data;








        $scope.companies =[];
        $scope.a = false;

        $scope.addRowAsyncAsJSON = function(){
            $scope.companies.push({ 'firstname':$scope.firstname, 'lastName': $scope.lastName, 'name': $scope.name, 'password':$scope.password, 'confirmPassword':$scope.confirmPassword, 'email':$scope.email, 'address':$scope.address, 'type':$scope.type,  'status1':$scope.status1, 'status2':$scope.status2, 'skillName':$scope.skillName, 'rate':$scope.rate, 'upload':$scope.upload, 'gender':$scope.gender, 'country':$scope.country, 'phone':$scope.phone, 'medium':$scope.medium,'ol':$scope.ol, 'al':$scope.al });
            // Writing it to the server
            //
            var dataObj = {
                firstname : $scope.firstname,
                    lastName : $scope.lastName,
                    name : $scope.name,
                    password: $scope.password,
                    confirmPassword : $scope.confirmPassword,
                    email : $scope.email,
                    address : $scope.address,
                 
                    gender : $scope.gender,
                    country : $scope.country,
                    phone : $scope.phone,
                type : $scope.type,

				medium : $scope.medium,
                
				"olSubjectRate" : [{ol : $scope.ol,status1 : $scope.status1}],
				
				"alSubjectRate" : [{al : $scope.al,status2 : $scope.status2}],
                
                
               
                //"userprofileSkillRate":[{skillName : $scope.skillName,rate : $scope.rate}],
                
                upload : $scope.upload,

                userprofileSkillRate:$scope.userprofileSkillRate,
               olSubjectRate:$scope.cores,
			   alSubjectRate:$scope.cores2

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
            $scope.firstname='';
            $scope.lastName='';
            $scope.name='';
            $scope.password='';
            $scope.cPassword='';
            $scope.email='';
            $scope.address='';
           
            $scope.gender='';
            $scope.country='';
            $scope.phone='';
            $scope.type='';

            $scope.ol='';
            $scope.al='';
            $scope.status1='';
            $scope.status2='';
            $scope.skillName='';
            $scope.rate='';
            $scope.upload='';
            $scope.medium='';




        };


        $scope.test = function () {
            accessFac.getPermission();
            $scope.save();
            $scope.addRowAsyncAsJSON();
        };

        $scope.submit = function () {
            console.log('test submit');
        }


        // This is the controller of the drop downs (Service to the backend)

        $scope.cores = [];
        $scope.addRow1 = function(){
            $scope.cores.push({  'ol' : $scope.ol,'status1' : $scope.status1});




            $scope.ol='';

            $scope.status1='';



			shareData.setExamData1($scope.cores);

        }

        $scope.cores2 = [];
        $scope.addRow2 = function(){
            $scope.cores2.push({  'al' : $scope.al,'status2' : $scope.status2});




            $scope.al='';

            $scope.status2='';



            shareData.setExamData2($scope.cores2);

        }


        $scope.userprofileSkillRate = [];
        $scope.addSkills = function(){
            $scope.userprofileSkillRate.push({ 'skillName':$scope.skillName, 'rate': $scope.rate});
            $scope.skillName='';
            $scope.rate='';

			shareData.setSkillData($scope.userprofileSkillRate);
        }

        //This is the validations of the Registration Form


        $scope.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }

        };

        $scope.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }

        };

/*
        app.directive('test1',['$location', function(location) {
            function compile(scope, element, attributes,$location) {
                return{
                    post:function(scope, element, iAttrs,$location) {
                        scope.click=function(createdProfile)
                        {
                            alert("click"+createdProfile);
                            $location.url('http://localhost:63342/newJkcs/index.html?_ijt=fe2miqh66jhr0c3l11bpi3b4uj#/createdProfile.html');
                        };
                    }
                };
            }

            return({
                compile: compile,
                restrict: 'AE',
            });

        }]);*/













        //This is the remove button

        $scope.removeSkill = function(skillName) {
            var index = -1;
            var skillArr = eval($scope.userprofileSkillRate);
            for (var i = 0; i < skillArr.length; i++) {
                if (skillArr[i].skillName === skillName) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.userprofileSkillRate.splice(index, 1);
        }
        $scope.removeAcademic1 = function(ol) {
            var index = -1;
            var skillArr = eval($scope.cores);
            for (var i = 0; i < skillArr.length; i++) {
                if (skillArr[i].ol === ol) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.cores.splice(index, 1);
        }
        $scope.removeAcademic2 = function(al) {
            var index = -1;
            var skillArr = eval($scope.cores2);
            for (var i = 0; i < skillArr.length; i++) {
                if (skillArr[i].al === al) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.cores2.splice(index, 1);
        }





        // This is the controller of the image uploader
        $scope.image = "";

    }])

    app.directive('myUpload', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.image = e.target.result;
                    scope.$apply();
                    localStorage.setItem("image",scope.image);
                }

                elem.on('change', function() {
                   reader.readAsDataURL(elem[0].files[0]);
                });
            }
        };

    }]);





})(App);













