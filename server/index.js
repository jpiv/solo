// Server
var express = require('express');
var fs = require('fs');

var app = express();
var port = 8080;
var _dir = __dirname.slice(0,-7);
app.use(express.static(_dir + '/app'));

app.get("/words", function (req, res) {
  var result = [];
  var words;
  res.type('json');
  fs.readFile(_dir + '/parsedWords.txt', function (err, data) {
    words = data.toString().split('\n');
    for(var i = 0; i < words.length; i++) {
      result.push({word: words[i]});
    }
    res.status(200).send(result);
  });
  
});

console.log('Server is listening on port', port);
app.listen(port);
