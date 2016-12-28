taskApp.controller('TaskController', function($scope, $routeParams, $http, $location){
  $scope.tasks = [];

function init(){
    $http.get('/list')
    .success(function(retorno) {
      $scope.tasks = retorno;
    })
    .error(function(erro) {
      console.log(erro)
    });
}

init();

  $scope.createTask = function(task) {
    task.active = 'false';
    task.progress = 'progress'; 
    $http.post('/create' , task)
    .success(function(retorno) {
      $location.path('/list');
    })
    .error(function(erro) {
      console.log(erro)
    });
  };

  $scope.saveTask = function(task){
    task.active = 'false';
    $http.post('/update/' + task._id, task)
    .success(function(retorno) {
      $scope.taskActive(task,'false');
    })
    .error(function(erro) {
      console.log(erro)
    });
  };

  $scope.taskProgress = function(task,param){
    task.progress = param;
    $http.post('/update/' + task._id, task)
    .success(function(retorno) {
      init();
    })
    .error(function(erro) {
      console.log(erro)
    });
  };
  
  $scope.taskActive = function(task,active){
    $scope.tasks[$scope.tasks.indexOf(task)].active = active;
    $scope.saveTask.title = $scope.tasks[$scope.tasks.indexOf(task)].title;
    $scope.saveTask.description = $scope.tasks[$scope.tasks.indexOf(task)].description;
  };
  $scope.removeTask = function(task) { 
    $http.delete('/remove/' + task._id)
    .success(function(retorno) {
      init();
    })
    .error(function(erro) {
      console.log(erro)
    });
  };
});


