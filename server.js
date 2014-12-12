/**
 * Created by instancetype on 12/11/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
const
  express = require('express')
, app = express()

app.set('view engine', 'jade')

app.get('/', function(req, res) {
  'use strict';

  res.render('index', { palette : ['#afc234', '#435d3e', '#b6d73'] })
})

app.listen(3000, function() {
  'use strict';

  console.log('server is listening...')
})