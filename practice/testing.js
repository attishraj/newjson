/*function sumAll()
{
  var i=0,
  res=0,
  no_of_param=arguments.length;
  for(;i<no_of_param;i++)
  {
    res +=arguments[i];
  }
  return res;
}
console.log(sumAll(4,88,6));*/

/*var global = 1;
function f() {
  var local = 2;
  global++;
  return global;
}
console.log(f());
console.log(f());
console.log(f());
alert(f());*/


/*var sum = function (a, b) {
    return a + b;
  };

 var add = sum;
console.log( typeof sum);*/

//function accepting another functions as parameter
/*function nes(a,b){
  return a() +b();
}
function one()
{
  return 1;
}
function two()
{
  return 2;
}
console.log(nes(one,two)); */


//closure
//1st
/*var global=1;
function outer()
{
  var outer_local=2;
  function inner()
  {
    var inner_local=3;
    return inner_local+outer_local+global;
  }
  return inner();
}
console.log(outer());*/

//getter settr function

(function(){
  var secret=0;
  getValue=function()
  {
    return secret;
  }
  setValue=function (v) {
    if(typeof v==="number")
    {secret=v;}
  }
}());
console.log(getValue());
console.log(setValue(54));
console.log(getValue());
console.log(getValue());
