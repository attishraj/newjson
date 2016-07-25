var fs = require("fs");
var cnt,a,b,cnt1;
var i=0,j=0;
var data = fs.readFileSync('a.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var noOfRow=arrayOne.length;
var header=arrayOne[0].split(',');
var noOfCol=header.length;
var country='Country Name';
var d='data.json';
var d1='data1.json';
var d2='data2.json';
var population='Population (Millions) - 2013';
var gdp='GDP Billions (US$) - 2013';
var purchase='Purchasing Power in Billions ( Current International Dollar) - 2013';
function calc(a1,a2,d)
{
var jArray=[];
var final_obj={};
//var cnt=header.indexOf(a1);
//var cnt1=header.indexOf(a2);
for (i = 1; i < noOfRow-1; i++)
{
  var myNewLine=arrayOne[i].split(',');
  if(myNewLine[a1] != "European Union")
  {
  final_obj[header[a1]]=myNewLine[a1];
  final_obj[header[a2]]=myNewLine[a2];
  jArray.push(final_obj);
  jArray.sort(function(a,b)
  {
  return b[a2]-a[a2];
  })
 final_obj={};
  }
}
console.log(jArray);
var file = d;
var obj = JSON.stringify(jArray);
fs.writeFileSync(file, obj);
}
calc(country,population,d);
calc(country,gdp,d1);
calc(country,purchase,d2);
