/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
/* global describe, it */

'use strict';

var hex2rgb = require('../lib/hex2rgb')
  , assert = require('assert')

describe('hex2rgb', function() {

  it('should throw an error if supplied an invalid hex code', function() {

    assert.throws(
      function() { hex2rgb('not a hex') }
    , /Invalid hexadecimal/
    )
  })
})