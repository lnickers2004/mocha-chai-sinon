/**
 * Created by instancetype on 12/12/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
'use strict';

module.exports = {

  convert : function(hex, cb) {
    setTimeout(function() {
      var values
        , invalid

      if (/^#/.test(hex)) {
        hex = hex.slice(1)
      }

      invalid = this.isInvalid(hex)

      if (invalid) {
        return cb(new Error(invalid.reason))
      }

      values = this.arrayify(hex)
      return cb(null, this.parse(values))

    }.bind(this), 50)
  }


, arrayify : function(hex) {
    var nums = hex.split('')

    if (nums.length === 3) {
      nums = [nums[0], nums[0], nums[1], nums[1], nums[2], nums[2]]
    }

    return nums
  }


, isInvalid : function(hex) {
    if (hex.length !== 3 && hex.length !== 6) {
      return { reason : 'Invalid Hexadecimal' }
    }
  }


, parse : function(nums) {
    var r
      , g
      , b

    r = parseInt([nums[0], nums[1]].join(''), 16)
    g = parseInt([nums[2], nums[3]].join(''), 16)
    b = parseInt([nums[4], nums[5]].join(''), 16)

    return [r, g, b]
  }
}