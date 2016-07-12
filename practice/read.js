var fs = require("fs");

var data = fs.readFileSync('a.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');

var header=arrayOne[0].split(',');

var population=header.indexOf("Population (Millions) - 2013");
var element=header.indexOf("Country Name");
var gdp=header.indexOf("GDP Billions (US$) - 2013");

console.log(element);
//console.log(header[country]);
console.log('\n')
var noOfRow=arrayOne.length;  //22

var noOfCol=header.length;  //26

var jArray=[];
var i=0,j=0;
var obj = {};
var myNewLine;
for (i = 1; i <noOfRow-2; i++) {
   myNewLine=arrayOne[i].split(',');
obj[header[element]]=myNewLine[element];
        obj[header[population]]=myNewLine[population];
    jArray.push(obj);
obj = {};
}
jArray.sort(function(a,b)
   {
        return b['Population (Millions) - 2013']-a['Population (Millions) - 2013'];
   });
console.log( jArray);
/*function compareNumbers(a, b) {
  return a - b;
}*/
