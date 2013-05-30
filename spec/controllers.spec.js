describe("test", function() {
  it("should exist", function() {
    expect(true).toBe(true);
  });
});

describe('FactsController', function() {
  beforeEach(inject(function($rootscope, $controller) {
    var scope = $rootscope.$new();
    var factsController = $controller(FactsController, {
      $scope: scope
    });
  }));

  beforeEach(function() {
    factsController = "Sdfsdfsdf";
    FactsController = factsController;
  });

  describe('sanity', function() {
    it("should be created", function() {
      expect(factsController).toBeDefined();
    });
  });

  describe('init', function() {
    it("should set the default fact", function() {
    });

    it("should get a random fact", function() {
    });
  });
});

