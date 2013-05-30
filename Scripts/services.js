var factService = function($http) {
  var that = this;

  this.getFacts = function() {
    var facts = [
      {text:'fact1 text', citation:'fact1 citation'},
      {text:'fact2 text', citation:'fact2 citation'}
    ];

    $http({'method': 'GET', 'url':'http://haveyouconsideredthatyoumightbewrong.com/api/v1/facts'})
      .success(function(data, status, headers, config) {
        console.log("success");
      })
      .error(function(data, status, headers, config) {
        console.log("failure");
      });

    return facts;
  }

  this.getRandomFact = function() {
    var facts = that.getFacts();
    var i = Math.floor((Math.random() * ((facts.length) - 0)) + 0);

    return facts[i];
  }
}

app.service('factService', factService);

