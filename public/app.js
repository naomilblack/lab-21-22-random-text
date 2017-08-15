angular.module("randomApp",[])
.controller("randomController", function($scope, $http){
  $http.get('/api/random-affirmation').then(function(response){
    console.log(response.data);
    $scope.affirmations = (response.data);
  });

});
