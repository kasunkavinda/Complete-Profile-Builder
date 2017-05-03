/**
 * Created by Kasun Kavinda on 3/10/2017.
 */

angular.module('myApp', []).

controller('UploadCtrl', ['$scope', function ($scope) {
    $scope.image = "";
}]).

directive('myUpload', [function () {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.image = e.target.result;
                $scope.$apply();
            }

            elem.on('change', function() {
                reader.readAsDataURL(elem[0].files[0]);
            });
        }
    };
}]);