// Server
var express = require('express');

var app = express();
var port = 8080;

app.use(express.static(__dirname.slice(0,-7) + '/app'));



console.log('Server is listening on port', port);
app.listen(port);
