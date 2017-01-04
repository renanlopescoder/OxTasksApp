var taskApp = angular.module('taskApp',['ngRoute']);

taskApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {

  $routeProvider.when('/list', {
      templateUrl : 'views/task-progress-list.html',
      controller : 'TaskController'
   }).when('/', {
       templateUrl : 'views/task-progress-list.html',
       controller : 'TaskController'
    }).when('/list-done', {
       templateUrl : 'views/task-completed-list.html',
       controller : 'TaskController'
    }).when('/create', {
       templateUrl : 'views/create.html',
       controller : 'TaskController'
    }).when('/about', {
       templateUrl : 'views/about.html',
       controller : 'TaskController'
    }).when('/calendar', {
       templateUrl : 'views/calendar.html',
       controller : 'TaskController'
    })
   .otherwise ({ redirectTo: '/' });
}]);
