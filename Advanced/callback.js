// var ninja = 'Libby';
// setTimeout(function(){
//   console.log(ninja);
// }, 2000);
// console.log(ninja);

// console.log("NOW: ");
// console.log("Declaring and asssignin variable 'ninja'.");
// var ninja = 'Libby';
//
// setTimeout( function myCallbackFunction() {
//   console.log("LATER: ");
//   console.log(ninja, "LATER");
// }, 2000);
//
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

// var a=2;
// var b=function() {
// console.log("something");
// }
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);

// function doSomething(possCall) {
//   if(typeof(possCall) === 'function'){
//     console.log('possCall is a callback');
//     possCall;
//   }
//   else{
//     console.log('possCall: ', possCall, 'is not callback a function.');
//   }
// }
// doSomething(function myCallback() {
//   console.log('YES');
// });
// doSomething('string');

function makePasta(pasta,makeSauce) {
  console.log("Boiling water.");
  console.log("Putting "+ pasta +" pasta in the water.");

  var sauce = makeSauce();
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}

function makePesto() {
  console.log("Making Pesto");
  return "PESTO";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "ALFREDO";
}

console.log(makePasta("PENNE", makePesto));
console.log(makePasta("FARFALLE", makeAlfredo));
