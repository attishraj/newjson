var fs=require("fs");

//0var data=fs.readFileSt('a.csv');
//console.log(data);
var rl=readline.createInterface({
  input:fs.createReadStream('a.csv')
});
console.log(rl);
var lineno=0;
var data;
var PrimaryType,Description,Year;
var count=0;
var header='count';
console.log("\n");


var obj={};
var crime={};
rl.on('close', function() {

 console.log(crime);
 var json_convert=JSON.stringify(obj);
 fs.appendFile('file2.json',json_convert);
 console.log("file writing done");
});

rl.on('line', function(line){
 lineno=lineno+1;
 if(lineno===1) {
     // this if construct is for the header section of the file
   //code for the execution of the header part goes here.
   data=(line);
   var header=data[0];
   for(var i=0;i<header.length;i++) {
     if(header[i] == 'Country Name') {
       indexOfPrimaryType=i;
     }
     if(header[i] == 'Population (Millions) - 2013') {
       indexOfDesc=i;
     }
     if(header[i] == 'GDP Billions (US$) - 2013') {
       indexOfYear=i;
     }
   }
 }
 else {
   data = csv2array(line);
   var line = data[0];
   if(line[indexOfDesc]=="$500 AND UNDER" || line[indexOfDesc]=="OVER $500") {
     if(crime[line[indexOfYear]] != undefined) {
       if(crime[line[indexOfYear]][line[indexOfDesc]] == undefined) {
         crime[line[indexOfYear]][line[indexOfDesc]] = 0;
       }
       crime[line[indexOfYear]][line[indexOfDesc]]++;
     }
     else {
       crime[line[indexOfYear]] = {};
     }
   }

 }
});
