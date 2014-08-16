var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { header: 'Blog', title: 'standyro' });
});

module.exports = router;
