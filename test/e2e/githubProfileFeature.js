describe('Github Profile Finder', function(){
  it('finds profiles', function() {
    browser.get('http://localhost:3000');

    eleent(by.model('searchTerm').sendKeys('spike01');
      element(byclassName('btn')).click();

      expect(element(by.binding('user.login')).getText()).
        toEqual('spike0');
  });
});
