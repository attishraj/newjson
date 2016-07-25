var qs=require('fs');
//console.log(qs);
var data=qs.readFileSync('a.csv');
var string=data.toString();
var array=string.split('\r\n');
var header=array[0].split(',');
var row=array.length;
var column=header.length;
var d='file1.JSON';
var d2='file2.JSON';
var d3='file3.JSON';
var country=header.indexOf("Country Name");
var gdp=header.indexOf("Population (Millions) - 2013");
var purchase=header.indexOf("Purchasing Power in Billions ( Current International Dollar) - 2013");
function determine(country,a,d)
{
  var newArray=[];
  var obj={};
  var first=header.indexOf(a);
  var second=header.indexOf(b);

for(i=0;i<rows;i++)
{
    var newvariable=array[i].split(',');
    if(newvariable[country]!='European Union')
    {
      obj[header[country]]=newvariable[country];
      obj[header[a]]=newvariable[a];
      newArray.push(obj);
      newArray.sort(function(p,q)
      {return q[a]-p[a];
    })

    obj={};
}
}

console.log(newArray);
var file=d;
var newobj = JSON.stringify(newArray);
fs.writeFileSync(file, newobj);
}
determine(country,population,data1);
