var express = require('express');
var fs = require('fs');

var router = express.Router();
module.exports = router;

function getUserHome() {
 return process.env[(process.platform == 'win32') ? 'HOMEPATH' : 'HOME'];
}

router.route('/home')
 .get(function(req, res) {
   var home = getUserHome();
   var mainArea = fs.readdirSync(home);
   res.json(mainArea);
 });