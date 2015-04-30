describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;
  var items;
  var httpBackend;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  beforeEach(inject(function(SearchHelpers){
    items = SearchHelpers.items;
  }))

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .expectGET("https://api.github.com/search/users?access_token=04ecceaf15527323cf837bff5f3ef06b1cdd7bad&q=hello")
        .respond(
        { items: items }
      );
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });


    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});
