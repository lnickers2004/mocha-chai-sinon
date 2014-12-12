/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
/* global describe, it, before, afterEach */
'use strict';

var getPalette = require('../lib/getPalette')
  , assert = require('assert')
  , fs = require('fs')
  , path = require('path')

  , configPath = path.join(process.cwd(), 'config.json')
  , writeConfig

writeConfig = function(configuration, cb) {
  fs.writeFile(configPath, JSON.stringify(configuration), cb)
}


describe('getPalette', function() {
  var config

  before(function(done) {
    fs.readFile(configPath, function(err, data) {
      config = JSON.parse(data.toString())
      done()
    })
  })

  afterEach(function(done) {
    writeConfig(config, done)
  })

  it('should throw an error if the result is not an array', function(done) {
    writeConfig({ palette : 'not an array' }, function(err) {
      assert.throws(getPalette, /Palette is not an array/)
      done()
    })
  })


  it('should return an array with three items', function() {
    var palette = getPalette()

    assert(Array.isArray(palette), 'getPalette did not return an array')
    assert.equal(palette.length, 3, 'palette does not have length of 3')
  })
})