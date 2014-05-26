/*
 * isweburl
 * https://github.com/FGRibreau/node-isweburl
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module Dependencies
 */
var dns = require('dns');
var Url = require('url');


/**
 * Check whether or not an url is private
 * @param  {String} url
 * @param  {Function} f(err, {boolean} isValid)
 */
module.exports = function isWebURL(url, f){
  var obj = Url.parse(url);

  if(!obj.host){
    // Don't go further the url does not seems to be valid
    return f(new Error('Invalid HOST'), false);
  }

  dns.lookup(obj.host, function(err, addr /*, family */){
    if(err){
      return f(err, false);
    }

    f(null, !isPrivateIP(addr));
  });
};

function isPrivateIP(ip){
  if(String(ip).split('.').length !== 4){
    // not an ip, return false
    return false;
  }

  // 10.0.0.0 - 10.255.255.255
  if(ip.indexOf('10.') === 0){
    return true;
  }

  // 172.16.0.0 - 172.31.255.255
  if(ip.indexOf('172.') === 0){
    var p = parseInt(ip.split('.')[1], 10);
    return p >= 16 && p <= 31;
  }

  // 192.168.0.0 - 192.168.255.255
  if(ip.indexOf('192.168') === 0){
    return true;
  }

  // Loopback
  // 127.0.0.0 - 127.255.255.255
  if(ip.indexOf('127') === 0){
    return true;
  }

  // Loopback ipv6
  if(ip.indexOf('::1') === 0){
    return true;
  }

  return false;
};
