var express = require('express');
var multer = require('multer');

var upload = multer({ dest: 'uploads/' });

var app = express();

app.listen(process.env.PORT || 8081);