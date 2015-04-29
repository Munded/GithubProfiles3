githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users?access_token=63b0d6dcd14a404af84c96214249ee95905f686a');

  var self = this;

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };

}]);
