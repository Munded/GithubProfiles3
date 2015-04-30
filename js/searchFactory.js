githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = "https://api.github.com/search/users?access_token=04ecceaf15527323cf837bff5f3ef06b1cdd7bad"
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q' : searchTerm
        }
      });
    }
  }
}]);