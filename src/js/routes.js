app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'templates/search.html',
      controller: 'SearchController'
    })
    .when('/single', {
      templateUrl: 'templates/single.html',
      controller: 'SingleController'
    })
    .otherwise('/');

});