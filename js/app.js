(function() {
  angular.module('app', ['ngRoute'])

    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/locations', {
            templateUrl: 'partials/locations-list.html',
            controller: 'BinLocationsController',
          })
          .otherwise({
            redirectTo: '/locations',
          });
      }
    ])

    .controller('BinLocationsController', ['$scope',
      function($scope) {
        $scope.locations = locationsData;
      }
    ]);

    var locationsData = [
      {
        street: "Something gatve",
        next_collection: "Wednesday, 16th December",
      },
      {
        street: "Švyturio gatve",
        next_collection: "Thursday, 17th December",
      },
      {
        street: "Another gatve",
        next_collection: "Friday, 18th December",
      },
    ];

})();
