# Marionette Orientation API

Hacky api for setting the "orientation" on b2g-desktop. Does not
actually interface with the screen apis but will resize b2g-desktop
window correctly and emit resize events.

### Usage:

```
var client; // some instance of marionette.client
client.plugin('orientation', require('marionette-orientation'));

client.orientation.get(); // portrait-primary
client.orientation.set('landscape-primary');
client.orientation.get(); // landscape-primary
```

## License

Copyright (c) 2013 Mozilla Foundation

Contributors: James Lal <jlal@mozilla.com>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
