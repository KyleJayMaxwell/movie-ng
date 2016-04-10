app.controller('myController', ['$scope', 'OMDBService', function($scope, OMDBService) {
  $scope.greeting = "Hello World!";

  // var search ='frozen';

  $scope.search = function (titleSearch) {

    OMDBService.searchMovie(titleSearch)
    .then(function(results){
      $scope.movies = results;
      console.log($scope.movies);
    });

  };

}]);

app.controller('SearchController', ['$scope', '$http', function($scope, $http) {
  $scope.greeting = "Hello World!";

  // var search ='frozen';

}]);