
//array//
/*var a=[1,"two",false,null,undefined];
console.log(a);
a[6]=[1,2,3];
console.log(a);

var a=[[1,2,3],[4,5,6]];
console.log(a[0][0]);  //1
console.log(a[0][1]); //2
console.log(a[0][2]); //3
console.log(a[0][3]); //undefined
console.log(a[1][0]); //4
//console.log(a[2][0]);
console.log(a[1][1]); //5
console.log(a[5][5]);//6
*/

//array in js is object//
/*var a=[2,4,6];
console.log(typeof(a[]));*/


//checking whether a variable exists//

//var result="";
/*var z
if(typeof z!==undefined)
{
  var result="yes";
}
console.log(result);*/


//for in
/*var a=[1,"two",2,"Apple","98Rr"];
var result='\n';
for (var i in a) {
    result += 'index: ' + i + '  value: ' + a[i] + '\n';
}
console.log(result);*/

// functions


/*var result=sum(9,7);
console.log(result);

function sum(a,b)
{
  //var z=a+b;
  return (a+b);
}*/

//functions arguments dynamically
//1st example

/*function args() {
    return arguments;
  }
console.log( args());

 console.log(args( 11, 24, 36, 64, true, 'ninja'));
//o/p is  [1, 2, 3, 4, true, "ninja"]*/

//2nd
function sumAll() {
  var i=0,
      res = 0,
      number_of_params = arguments.length;
  for (; i < number_of_params; i++) {
    res += arguments[i];
  }
  return res;

}
console.log(sumAll(6,99,7));
