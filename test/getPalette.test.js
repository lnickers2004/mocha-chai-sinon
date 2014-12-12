/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
/* global describe, it */

'use strict';

var getPalette = require('../lib/getPalette')
  , assert = require('assert')

describe('getPalette', function() {

  it('should return an array with 3 items', function() {
    var palette = getPalette()

    assert(Array.isArray(palette))
    assert.equal(palette.length, 3)
  })

})