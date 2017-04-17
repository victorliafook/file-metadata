var express = require('express');
var multer = require('multer');

var upload = multer({
    dest: 'uploads/'
});

var app = express();
app.use(express.static('public'));

app.post('/get-file-size', upload.single('file'), function(req, res, next) {
    console.log(req);
    // req.file is the `file` file 
    res.json({size: req.file.size});
});

app.listen(process.env.PORT || 8081);