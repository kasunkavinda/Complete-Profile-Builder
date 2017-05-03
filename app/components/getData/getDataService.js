/**
 * Created by Kasun Kavinda on 3/17/2017.
 */


app.service('StudentService', function ($http) {
    //**********----Get All Record----***************
    var urlGet = '';
    this.getAll = function (apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    }
});