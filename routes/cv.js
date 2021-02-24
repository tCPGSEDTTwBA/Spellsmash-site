var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('curriculum-vitae', { title: 'Alan Roth - CV'});
});

module.exports = router;
