var factService = function($http) {
  var that = this;
  this.facts = [];

  this.getFacts = function() {
    var facts = [];

    var baseUrl = 'http://haveyouconsideredthatyoumightbewrong.com';
    var requestUrl = baseUrl + '/api/v1/facts';

    $http({'method': 'GET', 'url':requestUrl})
      .success(function(data, status, headers, config) {
        that.setFacts(data);
      })
      .error(function(data, status, headers, config) {
        console.log("Error Retrieving Data");
      });

    return that.facts;
  }

  this.getRandomFact = function() {
    var facts = that.factsEmpty() ? that.getFacts() : that.facts;
    var i = Math.floor((Math.random() * ((facts.length) - 0)) + 0);

    return facts[i];
  }

  this.setFacts = function(facts) {
    that.facts = facts
  }

  this.factsEmpty = function() {
    return that.facts.length == 0;
  }
}

app.service('factService', factService);

