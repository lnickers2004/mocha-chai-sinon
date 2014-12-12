/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
'use strict';

function getData() {
  return ['#ffc2aa', '#435d3e', '#b61f3c']
}

module.exports = function getPalette(fetch) {
  fetch = fetch instanceof Function
        ? fetch
        : getData

  var palette = fetch()

  if (!Array.isArray(palette)) {
    throw new Error('is not an array')
  }

  return palette
}