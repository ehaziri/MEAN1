// // Example Problem:
// var hello = "interesting";
// function example() {
//   var hello = "hi!";
//   console.log(hello);
// }
// example();
// console.log(hello);
// // Answer:
// var hello;
// function example(){
//   var hello = "hi!";
//   console.log(hello);
// }
// hello = "interesting";
// example();
// console.log(hello);

//Problem 1:
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// firstFunc();
// function firstFunc(){
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);
//Answer:
// var first_variable;
// function firstFunc(){
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);
// first_variable = "Yipee I was first!";
// firstFunc();
// console.log(first_variable);


// varfun();
// var varfun = function(){
//   console.log('hi');
// }
//
// var varfun;
// varfun();
// varfun = function(){
//   console.log('hi');
// }



// //Problem 2
// var food = "Chicken";
// function eat(){
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";
//   console.log(food);
// }
// eat();
// console.log(food);
// //Answer
// var food;
// function eat(){
//   var food;
//   food = "half-chicken";
//   console.log(food);
//   food = "gone";
//   console.log(food);
// }
// food = "Chicken";
// eat();
// console.log(food);

// //Problem 3
// var new_word = "NEW!";
// function lastFunc(){
//   new_word = "old";
// }
// console.log(new_word);
// //Answer
// var new_word;
// function lastFunc(){
//   new_word = "old";
// }
// new_word = "NEW!";
// console.log(new_word);
