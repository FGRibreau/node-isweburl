/*
 * isweburl
 * https://github.com/FGRibreau/node-isweburl
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

'use strict';

var t = require('chai').assert;

var IsWebURL = require('..');

describe('IsWebURL', function(){
  it('should return false when the host is local', function(f){
    IsWebURL('http://localhost:80/hello', function(err, isValid){
      t.strictEqual(isValid, false);
      f();
    });
  });

  it('should return false when the host is a local ip', function(f){
    IsWebURL('http://127.0.0.1/hello', function(err, isValid){
      t.strictEqual(isValid, false);
      f();
    });
  });

  it('should return true when the host is a public domain', function(f){
    IsWebURL('http://bringr.net/hello', function(err, isValid){
      t.strictEqual(isValid, true);
      f();
    });
  });
});
