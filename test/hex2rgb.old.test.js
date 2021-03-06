/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
/* global describe, it */

'use strict';

var hex2rgb = require('../lib/hex2rgb.old')
  , assert = require('assert')

describe('hex2rgb', function() {

  it('should return an error if supplied an invalid hex code', function(done) {

    hex2rgb('invalid', function(err, data) {
      assert(err)
      done()
    })
  })

  it('should return a correctly converted RGB value', function(done) {

    hex2rgb('#00FF00', function(err, data) {
      assert.strictEqual(err, null)
      assert.deepEqual(data, [0, 255, 0])
      done()
    })
  })
})