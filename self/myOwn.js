var fs=require('fs');
//console.log(fs);
var data=fs.readFileSync('a.csv');
var string=data.toString();
var array=string.split('\r\n');
var row=array.length;
var header=array[0].split(',');
var col=header.length;
var data1='data1.json';
var data2='data2.json';
var data3='data3.json';
console.log(row);
console.log(col);
var country=header.indexOf('Country Name');
var purchase=header.indexOf('Purchasing Power in Billions ( Current International Dollar) - 2013');
var population=header.indexOf('Population (Millions) - 2013');
var gdp=header.indexOf('GDP Billions (US$) - 2013');
function find(x,y,data)
{
  //var index1=header.indexOf(x);
  //var index2=header.indexOf(y);
  var jArray=[];
  var obj={};
for(i=0;i<row-1;i++)
{
  var newLine=array[i].split(',');
  if(newLine[x]!='European Union')
  {
    obj[header[x]]=newLine[x];
    obj[header[y]]=newLine[y];
    jArray.push(obj);
    jArray.sort(function(p,q)
  {
    return q[y]-p[y];
  })
  obj={};
  }

  }
  console.log(jArray);
  var file=data;
  var newobj = JSON.stringify(jArray);
  fs.writeFileSync(file, newobj);

}
find(country,population,data1);
find(country,gdp,data2);
find(country,purchase,data3);
