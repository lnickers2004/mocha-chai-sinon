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

  it('should return a correctly converted RGB value', function() {
    var rgb1 = hex2rgb('#00FF00')
      , rgb2 = hex2rgb('#F0F')

    assert.deepEqual(rgb1, [0, 255, 0])
    assert.deepEqual(rgb2, [255, 0, 255])
  })
})