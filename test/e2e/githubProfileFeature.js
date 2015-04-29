describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
  var searchButton = element(by.className('btn')).click();

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox;
    searchButton;
    expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  });
});
