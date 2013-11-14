var getSize = require('./window_size');

function detect(client) {
  var size = getSize(client);
  return (size.width > size.height) ? 'landscape-primary' : 'portrait-primary';
}

module.exports = detect;
