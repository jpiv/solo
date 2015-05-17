var fs = require('fs');
fs.readFile('app/words/parsedWords.txt', function (err, data) {

  var strData = data.toString()
  var resultData = '';
  var c = 0;
  for(var i = 0; i < strData.length; i++) {
    resultData += strData[i];

    if (strData[i] === '\n') {
      resultData += '+ "';
    } else if (strData[i + 1] === '\n')
        resultData += '\\n"';
  }
  fs.writeFile('app/words/parsedWords.txt', resultData, function () {});
  console.log(resultData);
});