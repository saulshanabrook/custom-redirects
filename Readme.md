# Custom Redirects

[![NPM version](https://badge.fury.io/js/custom-redirects.svg)](http://badge.fury.io/js/custom-redirects)
[![Build Status](https://travis-ci.org/saulshanabrook/custom-redirects.svg?branch=master)](https://travis-ci.org/saulshanabrook/custom-redirects)
[![Coverage Status](https://img.shields.io/coveralls/saulshanabrook/custom-redirects.svg?branch=master)](https://coveralls.io/r/saulshanabrook/custom-redirects)

## Usage

 ```js
var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic({'/original': '/destination/'}));
app.listen();
```

## Info
Serves as permenent redirects (301).

I stole a bit of the middleware boilerplate from https://github.com/expressjs/serve-static

## License

The MIT License (MIT)

Copyright (c) 2014 Saul Shanabrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
