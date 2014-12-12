/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
'use strict';

var fs = require('fs')
  , path = require('path')

function getConfig() {
  var configPath = path.join(process.cwd(), 'config.json')
    , configJSON = fs.readFileSync(configPath.toString())

  return JSON.parse(configJSON)
}

module.exports = function() {
  var palette = getConfig().palette

  if (!Array.isArray(palette)) {
    throw new Error('Palette is not an array')
  }

  return palette
}