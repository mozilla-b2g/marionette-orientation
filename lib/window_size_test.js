marionette('window_size', function() {
  var client = marionette.client();
  var subject = require('./window_size');

  test('window size', function() {
    var size = subject(client);
    assert.ok(size.height && size.width, 'has height and width');
  });
});
