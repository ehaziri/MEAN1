// function myOriginalFunction(){
//   console.log('Hello');
// }
//
// function invokedFunction(callback) {
//   var x = setInterval(function(){
//     callback();
//   }, 4000)
// }
//
// invokedFunction(myOriginalFunction);
// invokedFunction(function() {
//   console.log('world');
// })

// console.log('NOW: ');
// console.log('Declaring and assigning variable ninja');
// var ninja = 'Libby';
//
// setTimeout(function myCallbackFunction() {
//   console.log("LATER: ");
//   console.log(ninja, "LATER")
// }, 2000);
//
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");


// function doSomething(possibleCallback) {
//   if(typeof(possibleCallback) === 'function'){
//   console.log('possibleCallback is a callback');
//   }
//   else{
//     console.log('possibleCallback:', possibleCallback, 'is not a callback function.');
//   }
// }
//
// doSomething(function myCallback() {
//   console.log('yes, I am a callback.');
// });
// doSomething('string');

// function makePasta(pasta, makeSauce) {
//   console.log("Boiling water");
//   console.log(`Putting ${pasta} pasta in the water`);
//   var sauce = makeSauce();
//   console.log("Mixing sauce");
//   console.log("Pasta is done!");
//   return `${pasta} Pasta with ${sauce} sauce! Voila!`;
// }
//
// function makePesto() {
//   console.log("Making Pesto");
//   return "pesto";
// }
//
// function makeAlfredo() {
//   console.log("Making Alfredo");
//   return "alfredo";
// }
//
// console.log(makePasta("Penne", makePesto));
// console.log(makePasta("Farfalle", makeAlfredo));


// function leadBootcamp(language, leader) {
//   var outcome = leader(language);
//   console.log(outcome);
// }
//
// function Charlie(language) {
//   var languages={
//     'java': 'successful',
//     'javascript': 'successful',
//   }
//   // console.log(if(languages[language]));
//   if(languages[language]){
//     return languages[language];
//   }
//   else{
//     return 'maybe not yet';
//   }
// }
//
// leadBootcamp('java', Charlie);
// function printResult(doSmth) {
//   var res = doSmth();
//   console.log(res);
// }
//
// printResult(function returnFive() {
//   return 5;
// })



// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }
// // call the each function
// each([1,2,3], function(num) { alert(num + " I am from the callback!"); }) //so many alerts!

console.log("He\'s here!");
