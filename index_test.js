var assert = require('assert');

marionette('orientation api', function() {
  marionette.plugin('orientation', require('./'));
  var client = marionette.client();
  var resize = require('./lib/resize_window');

  test('.get', function() {
    //client.executeAsyncScript(function() {});
    var result = client.orientation.get();
    assert.ok(typeof result === 'string', 'is a string');
    assert.ok(result.length, 'has a length');
  });

  suite('.set', function() {
    test('invalid value', function() {
      assert.throws(function() {
        client.orientation.set('xfoo');
      }, /invalid/);
    });

    test('to landscape', function() {
      // portrait
      resize(client, 100, 200);

      var changed = client.orientation.set('landscape-primary');
      assert.ok(changed, 'did change');
      assert.equal(client.orientation.get(), 'landscape-primary');
    });

    test('to portrait', function() {
      // landscape
      resize(client, 200, 100);

      var changed = client.orientation.set('portrait-primary');
      assert.ok(changed, 'did change');
      assert.equal(client.orientation.get(), 'portrait-primary');
    });

    test('does not change', function() {
      // landscape
      resize(client, 200, 100);

      assert.ok(
        client.orientation.set('portrait-primary'),
        'changes first time'
      );

      assert.ok(
        !client.orientation.set('portrait-primary'),
        'not the second'
      );
    });
  });
});
