/**
DOES NOT RUN ON NODE runs in gecko.

Taken from: http://mxr.mozilla.org/mozilla-central/source/b2g/chrome/content/screen.js
*/
function geckoSetSize(width, height) {
  // This is the toplevel <window> element
  var shell = document.getElementById('shell');

  // The <browser> element inside it
  var browser = document.getElementById('systemapp');

  // Set the window width and height to desired size plus chrome
  var chromewidth = window.outerWidth - window.innerWidth;
  var chromeheight = window.outerHeight - window.innerHeight;
  window.resizeTo(width + chromewidth,
                  height + chromeheight);

  // Set the browser element to the full unscaled size of the screen
  browser.style.width = browser.style.minWidth = browser.style.maxWidth =
    width + 'px';
  browser.style.height = browser.style.minHeight = browser.style.maxHeight =
    height + 'px';
  browser.setAttribute('flex', '0');  // Don't let it stretch
}


/**
XXX: ONLY works on b2g-desktop!

@param Marionette.Client client to use.
@param Number width to set size of window to.
@param Number height to set size of window to
*/
function setSize(client, width, height) {
  var chrome = client.scope({ context: 'chrome' });
  chrome.executeScript(geckoSetSize, [width, height]);
}

module.exports = setSize;
