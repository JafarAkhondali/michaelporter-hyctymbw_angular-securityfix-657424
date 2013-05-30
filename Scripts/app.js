var app = angular.module('wrong', []);

// fixes a scenario where GET calls through $http become OPTIONS calls
app.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);
