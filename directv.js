module.exports = {
  'Demo test Google' : function (browser) {
    console.log('Start');
    browser
      .url('https://www.directv.com/DTVAPP/login/login.jsp')
      .waitForElementVisible('body', 5000)
      .setValue('#loginField', 'shahvg2@att.net')
      .setValue('#passwordField', 'v2vibrants')
      // browser.waitForElementVisible('#btn_login_submit',1000)
      browser.click('a#btn_login_submit')
      //browser.pause(10000)
      //browser.assert.containsText('#main', 'Night Watch')
      browser.waitForElementVisible('body', 5000)
      browser.end();
      console.log('End');
  }
};