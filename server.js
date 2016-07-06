var express = require('express');
var router = require('./routes');
var app = express();
var fs = require('fs');


app.use('/api', router);
app.listen(8000, function(req, res) {
 console.log("up and running");
});