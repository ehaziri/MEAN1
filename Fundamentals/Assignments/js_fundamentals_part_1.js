//1
var x=[3,5,"Dojo", "rocks", "Michael", "Sensei"];
for(var i=0; i<x.length; i++){
  console.log(x[i]);
}
//or
// for (var key in x){
//   console.log(x[key]);
// }
//2
x.push(100);
console.log(x[x.length-1]);
//3
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);
//4
var sum=0;
for(var i=1; i<=500; i++){
  sum += i;
}
console.log("Sum: "+ sum);
//5, 6
var array=[1,5,90,25,-3,0];
var min=array[0];
var s=array[0];
var k=1;
while(k<array.length){
  if(array[k]<min){
    min=array[k];
  }
  s+=array[k];
  k++;
}
console.log("Minimum: " + min);
console.log("Average: " + s/array.length);

//7
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
 for(var key in new_ninja){
   console.log(key + ": " + new_ninja[key])
 }
