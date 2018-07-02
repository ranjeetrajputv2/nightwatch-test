/*module.exports = {
  'Demo test Google' : function (browser) {
    console.log('Start');
    browser
      .url('https://play.google.com/store/movies/details/Spider_Man_Homecoming?id=89CY-YpPD-k')
      .waitForElementVisible('body', 5000)
      .setValue('#loginField', 'shahvg2@att.net')
      .setValue('#passwordField', 'v2vibrants')
      browser.waitForElementVisible('a#btn_login_submit',10000)
      browser.click('a#btn_login_submit')
      //browser.pause(10000)
      //browser.assert.containsText('#main', 'Night Watch')
      browser.waitForElementVisible('body', 5000)
	  
	  browser.pause(10000)
      browser.end();
      console.log('End');
  }
};*/


module.exports = {
  'step one' : function (browser) {
	  browser.url('https://www.directv.com/DTVAPP/login/login.jsp');
	  browser.waitForElementVisible('body', 1000);
	  browser.setValue('#loginField', 'shahvg2@att.net');
	  browser.setValue('#passwordField', 'v2vibrants');
	  
	  browser.waitForElementVisible('a#btn_login_submit',10000);
	  browser.click('a#btn_login_submit');
  },

  'step two' : function (browser) {
		browser.waitForElementVisible('body', 5000)
	  browser.pause(100000)
      browser.end();  }
};