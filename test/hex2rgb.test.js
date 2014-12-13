/**
 * Created by instancetype on 12/12/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
/* global describe, it */

'use strict';

var hex2rgb = require('../lib/hex2rgb')
  , assert = require('assert')
  , sinon = require('sinon')
  , expect = require('chai').expect

describe('hex2rgb', function() {

  describe('convert', function() {
    it('should call parse once', function(done) {
      sinon.spy(hex2rgb, 'parse')

      hex2rgb.convert('#ffffff', function(err, data) {
        expect(hex2rgb.parse.calledOnce).to.be.true()
        expect(hex2rgb.parse.args[0][0]).to.have.length(6)

        hex2rgb.parse.restore()
        done()
      })
    })

    it('should return an error if supplied an invalid hex code', function(done) {

      hex2rgb.convert('invalid', function(err, data) {
        assert(err)
        done()
      })
    })

    it('should return a correctly converted RGB value', function(done) {

      hex2rgb.convert('#00FF00', function(err, data) {
        assert.strictEqual(err, null)
        assert.deepEqual(data, [0, 255, 0])
        done()
      })
    })
  })


})