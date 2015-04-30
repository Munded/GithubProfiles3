describe('factory: Search', function() {

  var search;
  var httpBackend;
  var items

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search
  }));

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("https://api.github.com/search/users?access_token=04ecceaf15527323cf837bff5f3ef06b1cdd7bad&q=hello")
        .respond(
        { items: items }
      );
    }));

  beforeEach(inject(function(SearchHelpers){
    items = SearchHelpers.items;
  }))


  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
    .then(function(response) {
      expect(response.data).toEqual(items)
    })
  });

});