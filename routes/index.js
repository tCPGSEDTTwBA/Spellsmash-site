var express = require('express');
var router = express.Router();
var obfuscator = require("../scripts/email-obfuscator");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.set("Content-Type", "html/text; charset=UTF-8")
  res.render('index', { title: 'Alan Roth', email: obfuscator.obfuscate("test@gmail.com")});
});

module.exports = router;
