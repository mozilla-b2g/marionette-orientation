var orientation = require('./lib/orientation'),
    windowSize = require('./lib/window_size'),
    resize = require('./lib/resize_window');

var ALLOWED_ORIENTATIONS = [
  'landscape-primary',
  'portrait-primary'
];

/**
Validate and normalize orientation passed into input.
*/
function validateOrientation(input) {
  if (ALLOWED_ORIENTATIONS.indexOf(input) === -1) {
    throw new Error('invalid orientation use: ' + ALLOWED_ORIENTATIONS.join(', '));
  }

  return validateOrientation;
}

function Orientation(client, options) {
  this.client = client;
}

Orientation.prototype = {
  /**
  @return String current orientation of screen.
  */
  get: function() {
    // XXX: this intentionally does NOT use mozOrientation we should
    // use the real marionette methods when they are available.
    return orientation(this.client);
  },

  /**
  Set the orientation of the device.

  XXX: This will change the context of marionette to the
       root iframe.

  @return Boolean true when changed false otherwise.
  */
  set: function(value) {
    validateOrientation(value);

    // MUST be run at root frame (system app)!
    this.client.switchToFrame();

    if (this.get() === value) return false;

    // figure out the flip
    var size = windowSize(this.client);
    resize(this.client, size.height, size.width);
    return true;
  }
};

module.exports = function(client) {
  return new Orientation(client);
};
