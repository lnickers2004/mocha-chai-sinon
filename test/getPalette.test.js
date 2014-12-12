/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
/* global describe, it */
'use strict';

var getPalette = require('../lib/getPalette')
  , assert = require('assert')
  , fs = require('fs')


describe('getPalette', function() {

  it('should throw an error if the result is not an array', function() {
    assert.throws(getPalette, /Palette is not an array/)
  })


  it('should return an array with three items', function() {
    var palette = getPalette()

    assert(Array.isArray(palette), 'getPalette did not return an array')
    assert.equal(palette.length, 3, 'palette does not have length of 3')
  })
})