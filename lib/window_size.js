function windowProp(client, name) {
  return client.executeScript(function(name) {
    return window[name];
  }, [name]);
}

function getSize(client) {
  return {
    height: windowProp(client, 'innerHeight'),
    width: windowProp(client, 'innerWidth')
  };
}

module.exports = getSize;

