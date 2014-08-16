var express = require('express');
var router = express.Router();

var geoip = require('geoip-lite');


/* GET home page. */
router.get('/', function(req, res) {
  var ip = req.connection.remoteAddress; // req.headers['x-forwarded-for']
  var geo = geoip.lookup(ip);

  res.render('index', { header: 'Stan Dyro', title: 'standyro', geo: geo, ip: ip });
});

module.exports = router;
