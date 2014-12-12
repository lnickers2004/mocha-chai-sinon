/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
'use strict';

module.exports = function(hex) {
  var nums
    , r
    , g
    , b

  if (/^#/.test(hex)) {
    hex = hex.slice(1)
  }

  if (hex.length !== 3 && hex.length !== 6) {
    throw new Error('Invalid hexadecimal')
  }

  nums = hex.split('')

  if (nums.length === 3) {
    nums = [nums[0], nums[0], nums[1], nums[1], nums[2], nums[2]]
  }

  r = parseInt([nums[0], nums[1]].join(''), 16)
  g = parseInt([nums[2], nums[3]].join(''), 16)
  b = parseInt([nums[4], nums[5]].join(''), 16)

  return [r, g, b]
}