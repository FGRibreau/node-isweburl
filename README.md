# isWebURL [![Build Status](https://drone.io/github.com/FGRibreau/node-isweburl/status.png)](https://drone.io/github.com/FGRibreau/node-isweburl/latest) [![NPM version](https://badge-me.herokuapp.com/api/npm/isweburl.png)](http://badges.enytc.com/for/npm/isweburl) [![Gittip](http://badgr.co/gittip/fgribreau.png)](https://www.gittip.com/fgribreau/)  [![Deps](https://david-dm.org/FGRibreau/node-isweburl.png)](https://david-dm.org/FGRibreau/node-isweburl)

> Check whether or not the provided url refers to a local address or not

![npm](https://nodei.co/npm/isweburl.png)

## Getting Started
Install the module with: `npm install isweburl`

```javascript
var IsWebURL = require('isweburl');

IsWebURL('http://localhost/mypage', function(err, isValid){
  // isValid true if the url is not a local one (a.k.a referring to a local address)
});
```

## Contributing

Please submit all issues and pull requests to the [FGRibreau/node-isweburl](http://github.com/FGRibreau/node-isweburl) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/FGRibreau/node-isweburl/issues).

## License 

The MIT License

Copyright (c) 2014 Francois-Guillaume Ribreau, 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

