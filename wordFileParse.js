var fs = require('fs');
fs.readFile('words.txt', function (err, data) {

  var newData = data.toString()
  var data2 = "";
  var c = 0;
  for(var i = 0; i < newData.length; i++) {
    if(newData[i] === "\n")
      c++;
    else
      c=0;
    if(newData[i] === " "){
      data2 += "\n";
      
    }
    else if (c < 2){
      data2 += newData[i];
    }
  }
  fs.writeFile('parsedWords.txt', data2,function () {});
  console.log(data2)

});