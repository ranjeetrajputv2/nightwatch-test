module.exports = {
  "Viewport Screenshots" : function (browser) {
    // Make sure a URL has been passed
    if (process.argv.length < 5) {
      console.log('No URL was specified');
      browser.end();
    }

    var url = process.argv[4],
        save_directory = 'screenshots',
        viewport_widths = [1024];
    browser.resizeWindow(1020, 900);
	console.log('URL',url);
    browser.url(url).waitForElementVisible('body', 1000);
    browser.pause(10000);
    browser.saveScreenshot(save_directory + '/screenshot'+uuidv4()+'.png')

      
    browser.end();
  }
};


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
