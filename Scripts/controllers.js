var FactsController = function($scope, factService) {
  function init() {
    $scope.getRandomFact();
  }

  $scope.getRandomFact = function() {
    $scope.randomFact = factService.getRandomFact();
  }

  init();
}

app.controller('FactsController', FactsController);

