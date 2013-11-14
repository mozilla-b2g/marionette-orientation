marionette('window size', function() {
  var assert = require('assert');
  var client = marionette.client();
  var subject = require('./resize_window');
  var windowSize = require('./window_size');

  suite('set new size', function() {
    var initialSize,
        newWidth,
        newHeight;

    setup(function() {
      initialSize = windowSize(client);
      newHeight = initialSize.height + 120;
      newWidth = initialSize.width + 120;

      // wait for a consistent state
      client.scope({ searchTimeout: 10000 }).
        findElement('iframe[src*="home"]');
    });

    test('inner width of browser', function() {
      client.executeScript(function() {
        window.addEventListener('resize', function resizeMe() {
          window.wrappedJSObject.__IHAZRESIZE = true;
          window.removeEventListener('resize', resizeMe);
        });
      });

      subject(client, newWidth, newHeight);

      var newSize = windowSize(client);
      assert.equal(newSize.height, newHeight);
      assert.equal(newSize.width, newWidth);

      client.waitFor(function() {
        return client.executeScript(function() {
          return window.wrappedJSObject.__IHAZRESIZE;
        });
      });
    });
  });

});
