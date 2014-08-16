var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { header: 'Stan Dyro', title: 'standyro' });
});

module.exports = router;
