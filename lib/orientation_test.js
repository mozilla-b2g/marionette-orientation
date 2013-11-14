suite('detect_orientation', function() {
  var client = marionette.client(),
      resize = require('./resize_window'),
      subject = require('./orientation');

  test('landscape', function() {
    resize(client, 200, 100);
    assert.equal(subject(client), 'landscape-primary');
  });

  test('portrait', function() {
    resize(client, 100, 200);
    assert.equal(subject(client), 'portrait-primary');
  });
});
