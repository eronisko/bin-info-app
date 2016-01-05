(function() {
  angular.module('app', ['ngRoute'])

    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/locations', {
            templateUrl: 'partials/locations-list.html',
            controller: 'BinLocationsController',
            controllerAs: 'vm',
          })
          .when('/locations/:streetName', {
            templateUrl: 'partials/location-detail.html',
            controller: 'BinLocationDetailController',
            controllerAs: 'vm',
          })
          .otherwise({
            redirectTo: '/locations',
          });
      }
    ])

    .controller('BinLocationsController', [
      function() {
        this.locations = locationsData;
      }
    ])

    .controller('BinLocationDetailController', ['$routeParams',
      function($routeParams) {
        this.location = findLocationByStreet($routeParams.streetName)
        console.log(this.location);
      }
    ]);

    function findLocationByStreet(street) {
      var result = $.grep(locationsData, function(e){ return e.street == street; });

      if (result.length == 1) {
        return result[0];
      }
    }

    var locationsData = locationDataAll;
})();
