module.exports = {
  'Google Play Demo' : function (client) {
	  
		save_directory = '/var/www/html/screenshots';
		
		if (process.argv.length < 5) {
		  console.log('No URL was specified');
		  client.end();
		}

		var url = process.argv[4];
	  
		client
		.url(url)
		.waitForElementVisible('body', 1000);


		client.useXpath()     // every selector now must be XPath
		client.assert.visible("//a[text()='Sign in']")
		client.click("//a[text()='Sign in']")
		client.useCss();

		client.url(function (response) {
			console.log(response.value); // outputs the current url
	 });
		//client.saveScreenshot(save_directory + '/screenshot'+uuidv4()+'.png');
		
		client.pause(5000)
		client.assert.visible("input[type=email]")
		.setValue('input[type=email]', 'facebook21r')
		client.useXpath()     // every selector now must be XPath
		client.assert.visible("//input[@type = 'submit']");
		//client.assert.visible("//input[value='Next']")
		client.click("//input[@type='submit']")
		client.useCss();
		
		client.pause(5000)
		client.assert.visible("input[type=password]")
		.setValue('input[type=password]', '21071990r')
		client.useXpath()     // every selector now must be XPath
		client.assert.visible("//input[@type='submit']")
		client.click("//input[@type='submit']")
		client.useCss();
		
		client.pause(5000)
		client.resizeWindow(1920, 3000);
	  client.saveScreenshot(save_directory + '/screenshot'+uuidv4()+'.png');

		client.assert.visible(".oocvOe button:first-child");
		client.click(".oocvOe button:first-child")
		client.resizeWindow(1920, 3000);
		client.pause(10000);
		client.saveScreenshot(save_directory + '/screenshot'+uuidv4()+'.png')
		client.end();


		/*.assert.title('Google')
		.assert.visible('input[type=text]')
		.setValue('input[type=text]', 'rembrandt van rijn')
		.waitForElementVisible('input[name=btnK]', 10000)
		.click('input[name=btnK]')
		.pause(1000)
		.assert.containsText('ol#rso li:first-child',
		'Rembrandt - Wikipedia') */
  }
};


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

