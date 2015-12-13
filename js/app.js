(function() {
  angular.module('app', [])

  .controller('BinLocationsController', function() {
    this.locations = streets;
  });

  streets = [
    "Švyturio gatve",
    "Something gatve",
    "Another gatve"
  ];

})();
