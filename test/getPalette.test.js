/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
/* global describe, it, before, afterEach */
'use strict';

var getPalette = require('../lib/getPalette')
  , assert = require('assert')
  , path = require('path')


describe.skip('getPalette', function() {

  it('should throw an error if the result is not an array', function() {
    function getBadPalette() {
      getPalette(path.join(process.cwd(), 'test', 'fixtures', 'config.json'))
    }

    assert.throws(getBadPalette, /is not an array/)
  })


  it('should return an array with three items', function() {
    var palette = getPalette()

    assert(Array.isArray(palette), 'getPalette did not return an array')
    assert.equal(palette.length, 3, 'palette does not have length of 3')
  })
})