module.exports = {
  'Demo test Google' : function (browser) {
    console.log('Start');
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 5000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]',1000)
      browser.click('input[name=btnK]')
      browser.pause(1000)
      //browser.assert.containsText('#main', 'Night Watch')
      browser.end();
      console.log('End');
  }
};