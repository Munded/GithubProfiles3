githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users?access_token=04ecceaf15527323cf837bff5f3ef06b1cdd7bad');

  var self = this;

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };

}]);
