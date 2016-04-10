app.service("OMDBService", ["$http", function($http){
  return{

    searchMovie: function (titleSearch) {
      return $http({
        method: 'GET',
        url: 'http://www.omdbapi.com/?s='+titleSearch
      })

      .then(function successCallback(response) {
        return response.data.Search;
      // this callback will be called asynchronously
      // when the response is available
      });
    }

  };
}]);