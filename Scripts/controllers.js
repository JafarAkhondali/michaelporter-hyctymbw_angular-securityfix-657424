var FactsController = function($scope, factService) {
  function init() {
    $scope.defaultFact = "You are probably more wrong than you are right";
    $scope.getRandomFact();
  }

  $scope.getRandomFact = function() {
    $scope.randomFact = factService.getRandomFact();
  }

  init();
}

app.controller('FactsController', FactsController);

