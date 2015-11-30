var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
       
        .when('/article', {
            templateUrl: 'articlepage.html',
            controller: 'StudentController'
        })

        .when('/category', {
            templateUrl: 'category.html',
            controller: 'StudentController'
        })

        .when('/contacts',{
            templateUrl: 'views/contacts.html',
            controller: 'StudentController'
        })
       .otherwise({
            /*redirectTo: ''*/
        });



    

       
});


 
mainApp.controller('StudentController', function($scope) {
    $scope.students = [
        {name: 'Mark Waugh', city:'New York'},
        {name: 'Steve Jonathan', city:'London'},
        {name: 'John Marcus', city:'Paris'}
    ];
 
    $scope.message = "Click on the link to view the students list.";
});





