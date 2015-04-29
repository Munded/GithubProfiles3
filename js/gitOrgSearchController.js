githubOrganisationSearch.controller('GitOrgSearchController', ['$resource', function($resource) {

  var searchOrganisation = $resource('https://api.github.com/search/orgs?access_token=04ecceaf15527323cf837bff5f3ef06b1cdd7bad');

  var self = this;

  self.doSearch = function() {
    self.searchResult = searchOrganisation.get(
      { q: self.searchTerm }
    );
  };

}]);