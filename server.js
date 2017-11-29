var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening http://127.0.0.1:8080/');
});