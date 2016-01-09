(function() {
  angular.module('app', ['ngRoute', 'angular.filter'])

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
      }
    ])

    // Filters locations by street names. The filtering is insensitive to case
    // and diacritics.
    .filter('filterByStreet', ['$filter', function($filter) {
      return function(input, query) {
        if (!query) {
          return;
        }

        var queryForComparison = $filter('latinize')(query).toUpperCase();

        // Custom comparator predicate function
        expression = function(value, index, array) {
          var streetForComparison = $filter('latinize')(value.street).toUpperCase();
          return streetForComparison.indexOf(queryForComparison) >= 0;
        }

        return $filter('filter')(input, expression);
      }
    }])
    ;

    function findLocationByStreet(street) {
      var result = $.grep(locationsData, function(e){ return e.street == street; });

      if (result.length == 1) {
        return result[0];
      }
    }

    var locationsData = locationDataAll;
})();
