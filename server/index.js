// Server
var express = require('express');
var fs = require('fs');

var app = express();
var port = 8080;
var _dir = __dirname.slice(0,-7);
app.use(express.static(_dir + '/app'));

app.get("/words", function (req, res) {
  var results = [];
  var words;
  var numWords = 200;
  var randWord = 0;
  res.type('json');
  fs.readFile(_dir + '/parsedWords.txt', function (err, data) {
    words = data.toString().split('\n').slice(0,-1);
    for(var i = 0; i < numWords; i++) {
      rndWord = words[Math.floor(Math.random() * words.length)];
      results.push({ word: rndWord });
    }
    res.status(200).send(results);
  });
  
});

console.log('Server is listening on port', port);
app.listen(port);
